import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { user } } = await supabase.auth.exchangeCodeForSession(code)

    if (user) {
      // Store user data
      await supabase.from('users').upsert({
        id: user.id,
        email: user.email,
        last_sign_in: new Date().toISOString()
      })
    }
  }

  return NextResponse.redirect(new URL('/', requestUrl.origin))
} 
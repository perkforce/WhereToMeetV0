import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginButton } from "@/components/shared/auth/login-button";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  try {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
      cookies: () => cookieStore,
    });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      redirect("/dashboard");
    }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to Where To Meet</h1>
            <p className="mt-2 text-gray-600">
              Find the perfect meeting spot between two locations
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <LoginButton />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}

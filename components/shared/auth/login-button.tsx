"use client";

import { Button } from "@/components/ui/button";
import { useSupabase } from "@/components/providers/supabase-provider";

export function LoginButton() {
  const { supabase } = useSupabase();

  const handleLogin = async () => {
    const redirectTo =
      process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${redirectTo}/auth/callback`,
        scopes: "email profile",
      },
    });
  };

  return (
    <Button onClick={handleLogin} variant="default">
      Sign in with Google
    </Button>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { useSupabase } from "@/components/providers/supabase-provider";

export function LoginButton() {
  const { supabase } = useSupabase();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/callback`,
      },
    });
  };

  return (
    <Button onClick={handleLogin} variant="default">
      Sign in with Google
    </Button>
  );
}

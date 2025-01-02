"use client";

import { Button } from "@/components/ui/button";
import { useSupabase } from "@/components/providers/supabase-provider";
import { useEffect, useState } from "react";

export function Header() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setEmail(user?.email ?? null);
    };
    getUser();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Where To Meet</h1>
        <div className="flex items-center gap-4">
          {email && (
            <>
              <span className="text-sm text-gray-600">{email}</span>
              <Button variant="ghost" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

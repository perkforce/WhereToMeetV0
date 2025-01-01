"use client";

import { Button } from "@/components/ui/button";
import { useSupabase } from "@/components/providers/supabase-provider";

export function Header() {
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Where To Meet</h1>
        <Button variant="ghost" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </header>
  );
}

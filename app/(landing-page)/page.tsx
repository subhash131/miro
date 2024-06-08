"use client";
import { SignInButton, useSession } from "@clerk/clerk-react";
import { Button } from "../../components/ui/button";
import { Unauthenticated } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) router.replace("/dashboard");
  }, [isSignedIn, router]);
  return (
    <Unauthenticated>
      <SignInButton>
        <Button>Sign in</Button>
      </SignInButton>
    </Unauthenticated>
  );
}

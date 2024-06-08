"use client";
import { SignInButton, useSession } from "@clerk/clerk-react";
import { Button } from "../../components/ui/button";
import { Unauthenticated } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./_components/navbar";

export default function Home() {
  const { isSignedIn } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) router.replace("/dashboard");
  }, [isSignedIn, router]);
  return (
    <Unauthenticated>
      <Navbar />
      <div className="w-screen h-screen bg-[#FCF7EF] pt-20 flex items-center justify-center flex-col">
        <div className="flex flex-col items-center gap-10">
          <div className="text-6xl flex flex-col gap-1 text-center">
            <p>Think and create. </p>
            <p>All in one visual workspace.</p>
          </div>
          <div className="flex flex-col gap-1 text-center text-base items-center justify-center">
            <p>Go from brainstorming to execution, all in one place.</p>
            <p>Miro is your team&apos;s collaborative online workspace.</p>
          </div>
          <Button
            asChild
            className="bg-blue-600 text-white hover:bg-blue-900 w-96 py-6 text-lg"
          >
            <SignInButton>Sing up free</SignInButton>
          </Button>
        </div>
        <p className="text-xs text-neutral-500 mt-8">
          Keep work and life separate by using your work email
        </p>
      </div>
    </Unauthenticated>
  );
}

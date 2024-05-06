"use client";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import { Button } from "../../components/ui/button";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Home() {
  return (
    <SignInButton>
      <Button>click me</Button>
    </SignInButton>
  );
}

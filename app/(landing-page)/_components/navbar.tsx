import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen h-20 bg-white flex items-center justify-between px-10">
      <div className="flex gap-2 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={10}
          height={10}
          className="size-10"
        />
        <h1 className="text-3xl font-semibold">miro</h1>
      </div>
      <div className="flex gap-4">
        <Button
          asChild
          variant="outline"
          className="border-black hover:bg-black hover:text-white transition"
        >
          <SignInButton>Login</SignInButton>
        </Button>
        <Button
          asChild
          variant="secondary"
          className="bg-blue-600 text-white hover:bg-blue-900 text-base"
        >
          <SignUpButton>Sing up free</SignUpButton>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

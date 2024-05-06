"use client";
import { Authenticated } from "convex/react";
import React from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div>
      <Authenticated>{children}</Authenticated>
    </div>
  );
};

export default ProtectedLayout;

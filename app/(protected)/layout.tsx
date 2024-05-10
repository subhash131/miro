"use client";
import { Authenticated } from "convex/react";
import React from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <Authenticated>{children}</Authenticated>;
};

export default ProtectedLayout;

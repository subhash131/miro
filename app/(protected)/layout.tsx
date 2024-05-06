"use client";
import { Authenticated } from "convex/react";
import React from "react";
import Sidebar from "./dashboard/_components/sidebar";
import { OrgSidebar } from "./dashboard/_components/org-sidebar";
import Navbar from "./dashboard/_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <Authenticated>
      <main className="h-full">
        <Sidebar />
        <div className="pl-[60px] h-full">
          <div className="flex gap-x-3 h-full">
            <OrgSidebar />
            <div className="h-full flex-1">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </main>
    </Authenticated>
  );
};

export default ProtectedLayout;

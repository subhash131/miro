"use client";
import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { CreateOrganizationComponent } from "./manage-organization";

const EmptyOrg = () => {
  return (
    <div className="h-full flex-col flex items-center justify-center">
      <Image src="/elements.svg" alt="empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6 ">Welcome to Miro</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none w-fit h-fit absolute top-20 left-96 grid place-content-center">
            <CreateOrganizationComponent />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;

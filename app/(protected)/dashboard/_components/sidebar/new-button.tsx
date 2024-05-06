"use client";
import React from "react";

import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { CreateOrganization } from "@clerk/clerk-react";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square">
          <button className="bg-white/25 h-full w-full rounded-md grid place-content-center opacity-60 hover:opacity-100 transition">
            <Plus className="text-white" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none w-fit">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;

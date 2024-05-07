"use client";
import React from "react";

import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import Hint from "@/components/hint";
import CreateOrganizationComponent from "../create-organization";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="aspect-square">
          <Hint
            label="Create Organization"
            side="right"
            align="start"
            sideOffset={18}
            alignOffset={4}
          >
            <button className="bg-white/25 h-full w-full rounded-md grid place-content-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none w-fit">
        <div className="absolute left-60 top-0 w-full h-full grid place-content-center">
          <CreateOrganizationComponent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;

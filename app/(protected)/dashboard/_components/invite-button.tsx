import React from "react";

import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfileComponent } from "./manage-organization";

const InviteButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Invite members
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[880px] scale-90 flex items-center justify-center">
          <OrganizationProfileComponent />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InviteButton;

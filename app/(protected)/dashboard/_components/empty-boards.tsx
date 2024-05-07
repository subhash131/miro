import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/clerk-react";
import Image from "next/image";
import React from "react";

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate: create, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    if (!organization) return;
    create({
      orgId: organization.id,
      title: "undefined",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" onClick={onClick} disabled={pending}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;

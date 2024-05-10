"use client";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate: create, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    create({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create Board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 border-blue-800 flex flex-col items-center justify-center py-6 rounded-md hover:scale-105 transition",
        (pending || disabled) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed hover:scale-100"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1 font-semibold" />
      <p className="text-xs text-white font-light">New board</p>
    </button>
  );
};

export default NewBoardButton;

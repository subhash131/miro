"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/clerk-react";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  authorId,
  authorName,
  createdAt,
  id,
  imageUrl,
  isFavorite,
  orgId,
  title,
}: BoardCardProps) => {
  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorites
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unFavorites
  );
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error("Failed to favorite"));
    }
  };
  return (
    <Link href={`/board/${id}`}>
      <div className="hover:scale-105 transition group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image fill src={imageUrl} alt={title} className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          disabled={pendingFavorite || pendingUnfavorite}
          isFavorite={isFavorite}
          onClick={toggleFavorite}
          title={title}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden animate-pulse">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

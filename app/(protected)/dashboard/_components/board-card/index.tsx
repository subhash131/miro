"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Overlay from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/clerk-react";
import Footer from "./footer";

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
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });
  return (
    <Link href={`/board/${id}`}>
      <div className="hover:scale-105 transition group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image fill src={imageUrl} alt={title} className="object-fit" />
          <Overlay />
        </div>
        <Footer
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          disabled={false}
          isFavorite={isFavorite}
          onClick={() => {}}
          title={title}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

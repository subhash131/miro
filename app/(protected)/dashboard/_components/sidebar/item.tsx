"use client";

import Hint from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/clerk-react";
import Image from "next/image";
import React from "react";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, imageUrl, name }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint
        label={name}
        side="right"
        align="start"
        sideOffset={18}
        alignOffset={4}
      >
        <Image
          alt={name}
          src={imageUrl}
          fill
          onClick={onClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            `${isActive && "opacity-100"}`
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;

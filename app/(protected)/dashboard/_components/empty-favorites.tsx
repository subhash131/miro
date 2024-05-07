import Image from "next/image";
import React from "react";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-favorites.svg" alt="empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">No favorites!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try favoring a board</p>
    </div>
  );
};

export default EmptyFavorites;

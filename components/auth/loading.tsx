import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.png"
        width={120}
        height={120}
        className="animate-pulse duration-700"
        alt="Logo"
        priority
      />
    </div>
  );
};

export default Loading;

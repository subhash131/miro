"use client";
import React from "react";

interface InfoProps {
  name: string;
  picture: string;
}

const Info = ({ name, picture }: InfoProps) => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      {name}
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md h-12 flex items-center shadow-md w-[300px]" />
  );
};

export default Info;

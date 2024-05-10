"use client";
import React from "react";
import Canvas from "./_components/canvas";
import Room from "@/components/room";
import CanvasLoading from "./_components/canvas-loading";

interface BoardPageProps {
  params: {
    id: string;
  };
}

const BoardIdPage = ({ params: { id } }: BoardPageProps) => {
  return (
    <Room roomId={id} fallback={<CanvasLoading />}>
      <Canvas boardId={id} />
    </Room>
  );
};

export default BoardIdPage;

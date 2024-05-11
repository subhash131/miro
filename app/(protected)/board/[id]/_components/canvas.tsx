"use client";
import React, { useState } from "react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useSelf,
} from "@/liveblocks.config";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { CursorsPresence } from "./cursors-presence";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();
  const info = useSelf((me) => me.info);
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg className="w-screen h-screen">
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;

"use client";
import React, { useCallback, useEffect, useState } from "react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useSelf,
  useMutation,
  useMyPresence,
} from "@/liveblocks.config";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    console.log({
      x: e.deltaX,
      y: e.deltaY,
    });
    setCamera((camera) => ({
      x: (camera.x = e.deltaX),
      y: (camera.y = e.deltaY),
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();
      const current = pointerEventToCanvasPoint(e, camera);
      setMyPresence({ cursor: current });
    },
    []
  );
  const info = useSelf((me) => me.info);

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);
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

      <svg
        className="w-screen h-screen bg-red-50"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;

"use client";
import React, { memo } from "react";
import { useOthersConnectionIds } from "@/liveblocks.config";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => {
        return <Cursor key={connectionId} connectionId={connectionId} />;
      })}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      {/* TODO: Draft Pencil */}
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";

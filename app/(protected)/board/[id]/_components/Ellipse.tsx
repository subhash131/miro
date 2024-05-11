import { colorToCss } from "@/lib/utils";
import { EllipseLayer, RectangleLayer } from "@/types/canvas";
import React from "react";

interface EllipseProps {
  id: string;
  layer: EllipseLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseProps) => {
  const { fill, height, type, width, x, y } = layer;
  return (
    <ellipse
      className="drop-shadow-md "
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      cx={width / 2}
      cy={height / 2}
      rx={width / 2}
      ry={height / 2}
      strokeWidth={2}
      fill={colorToCss(fill)}
      stroke={selectionColor || "transparent"}
    />
  );
};

export { Ellipse };

interface Props {
  /** Color of the section above. Omit for a transparent top (e.g. over the starfield). */
  from?: string;
  /** Color of the section below. Omit for a transparent bottom. */
  to?: string;
  /** Divider height in px. */
  height?: number;
  /** Number of pixel steps in the staircase. More = finer slant. */
  steps?: number;
  /** Mirror the slant direction. */
  flip?: boolean;
}

/**
 * A slanted section transition rendered as a staircase of square pixels,
 * echoing the angled bands in the reference design. Self-contained: it
 * paints `from` above the staircase and `to` below it, so adjacent sections
 * just need matching solid backgrounds.
 */
export default function PixelSlant({
  from,
  to,
  height = 80,
  steps = 14,
  flip = false,
}: Props) {
  // Build the staircase edge from bottom-left up to top-right.
  const edge: Array<[number, number]> = [[0, steps]];
  for (let i = 0; i < steps; i++) {
    const y = steps - 1 - i; // steps-1 .. 0
    edge.push([i, y]); // step up
    edge.push([i + 1, y]); // run right
  }

  const toEdge = (pts: Array<[number, number]>) =>
    pts.map(([x, y]) => `${x},${y}`).join(" ");

  // Region below the staircase (the incoming section's color).
  const bottomPts = toEdge([...edge, [steps, steps]]);
  // Region above the staircase (the outgoing section's color).
  const topPts = toEdge([...edge, [steps, 0], [0, 0]]);

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${steps} ${steps}`}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      className="block w-full"
      style={{ height, transform: flip ? "scaleX(-1)" : undefined }}
    >
      {/* fill via style (not the `fill` attribute) so CSS var() colors resolve */}
      {from && <polygon points={topPts} style={{ fill: from }} />}
      {to && <polygon points={bottomPts} style={{ fill: to }} />}
    </svg>
  );
}

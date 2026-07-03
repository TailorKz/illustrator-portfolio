import type { CSSProperties, ReactNode } from "react";

type FloatingIconProps = {
  children: ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration?: number;
  delay?: number;
  driftX?: number;
  driftY?: number;
  rotate?: number;
  className?: string;
};

/**
 * Decorative icon that gently drifts + rotates forever.
 * Positioned absolutely inside a `relative` section.
 */
export function FloatingIcon({
  children,
  top,
  left,
  right,
  bottom,
  duration = 7,
  delay = 0,
  driftX = 12,
  driftY = -18,
  rotate = 0,
  className = "",
}: FloatingIconProps) {
  const style = {
    top,
    left,
    right,
    bottom,
    ["--dur" as string]: `${duration}s`,
    ["--delay" as string]: `${delay}s`,
    ["--drift-x" as string]: `${driftX}px`,
    ["--drift-y" as string]: `${driftY}px`,
    ["--rot-start" as string]: `${rotate}deg`,
    ["--rot-mid" as string]: `${rotate + 10}deg`,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={`floating-icon absolute pointer-events-none select-none ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
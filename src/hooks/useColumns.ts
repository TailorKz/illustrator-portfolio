import { useEffect, useState } from "react";

export function useColumns(breakpoints: { default: number; sm?: number; lg?: number }) {
  const getColumns = () => {
    if (typeof window === "undefined") return breakpoints.default;
    const w = window.innerWidth;
    if (breakpoints.lg && w >= 1024) return breakpoints.lg;
    if (breakpoints.sm && w >= 640) return breakpoints.sm;
    return breakpoints.default;
  };

  const [columns, setColumns] = useState(getColumns);

  useEffect(() => {
    const onResize = () => setColumns(getColumns());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return columns;
}
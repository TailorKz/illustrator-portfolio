import type { SVGProps } from "react";

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5l2.6 6.8 7.4.5-5.7 4.8 1.9 7.2L12 16.9l-6.2 3.9 1.9-7.2-5.7-4.8 7.4-.5L12 1.5z" />
    </svg>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 21s-7.5-4.6-10.2-9.3C.1 8.7 1.4 5 5 4.2c2.2-.5 4.1.6 5 2.4.9-1.8 2.8-2.9 5-2.4 3.6.8 4.9 4.5 3.2 7.5C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function PenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21l1.4-4.9L16.6 3.9a1.8 1.8 0 0 1 2.5 0l1 1a1.8 1.8 0 0 1 0 2.5L7.9 19.6 3 21z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  );
}

export function FlowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="2.6" />
      <ellipse cx="12" cy="5.2" rx="2.6" ry="3.6" />
      <ellipse cx="12" cy="18.8" rx="2.6" ry="3.6" />
      <ellipse cx="5.2" cy="12" rx="3.6" ry="2.6" />
      <ellipse cx="18.8" cy="12" rx="3.6" ry="2.6" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2c.6 4.2 2 6.7 6.5 7.5-4.5.8-5.9 3.3-6.5 7.5-.6-4.2-2-6.7-6.5-7.5C10 8.7 11.4 6.2 12 2z" />
    </svg>
  );
}

export function PaperclipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M7 12.5V6a3 3 0 0 1 6 0v10a5 5 0 0 1-10 0V8" />
    </svg>
  );
}
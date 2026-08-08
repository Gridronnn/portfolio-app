import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names conditionally.
 * Uses clsx for conditional className merging.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Format an index number to a zero-padded string.
 * e.g., 1 → "01", 12 → "12"
 */
export function formatIndex(n: number): string {
  return n.toString().padStart(2, "0");
}

/**
 * Format a date string to a human-readable format.
 * e.g., "2024-11-15" → "Nov 15, 2024"
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Get the current local time formatted nicely.
 */
export function getLocalTime(): string {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

/**
 * Check if we're in a browser environment.
 */
export const isBrowser = typeof window !== "undefined";

/**
 * Check if the device prefers reduced motion.
 */
export function prefersReducedMotion(): boolean {
  if (!isBrowser) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

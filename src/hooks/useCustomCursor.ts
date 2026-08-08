"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Hook that provides a custom terminal-block cursor.
 * - Small block by default, expands on interactive elements.
 * - Hidden on touch devices via CSS.
 * - Disabled when prefers-reduced-motion is set.
 */
export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isInteractive = useRef(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!cursorRef.current) return;
    cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }, []);

  const onMouseEnterInteractive = useCallback(() => {
    isInteractive.current = true;
    cursorRef.current?.classList.add("custom-cursor--expanded");
  }, []);

  const onMouseLeaveInteractive = useCallback(() => {
    isInteractive.current = false;
    cursorRef.current?.classList.remove("custom-cursor--expanded");
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    // Create cursor element
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    // Track mouse movement
    window.addEventListener("mousemove", onMouseMove);

    // Track interactive elements
    const interactiveSelectors = "a, button, [role='button'], input, textarea, select, [data-cursor-expand]";
    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(interactiveSelectors);
      newElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      observer.disconnect();
      document.documentElement.style.cursor = "";
      cursor.remove();
      cursorRef.current = null;
    };
  }, [onMouseMove, onMouseEnterInteractive, onMouseLeaveInteractive]);

  return cursorRef;
}

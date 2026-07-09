import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared page section wrapper with unified vertical spacing.
 * Controlled globally via the `--section-padding` CSS variable
 * (see `.section-padding` in `src/index.css`).
 *
 * Do not add ad-hoc `pt-*` / `pb-*` overrides — adjust the token instead.
 */
export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={cn("section-padding", className)} {...props} />
  ),
);
Section.displayName = "Section";

/**
 * SectionDivider — unified separator between sections.
 *
 * variant="fade"     → simple gradient hairline (default)
 * variant="ornament" → centred wordmark/symbol with fading hairlines on each side
 *
 * Always rendered inside .section-container so width is consistent across the site.
 */
type Props = {
  variant?: "fade" | "ornament";
  label?: string;
  className?: string;
};

const SectionDivider = ({ variant = "fade", label = "·", className = "" }: Props) => {
  return (
    <div className={`section-container ${className}`} aria-hidden="true">
      {variant === "ornament" ? (
        <div className="divider-ornament py-2">
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium">
            {label}
          </span>
        </div>
      ) : (
        <div className="divider-fade" />
      )}
    </div>
  );
};

export default SectionDivider;

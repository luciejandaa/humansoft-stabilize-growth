import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

/**
 * Black call-to-action banner used at the bottom of key subpages.
 * White text + coral accents keeps the CTA visually anchored and decisive.
 */
const CTABanner = ({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTABannerProps) => {
  return (
    <Section>
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.92) 100%)",
            color: "hsl(var(--background))",
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative max-w-3xl mx-auto">
            {eyebrow && (
              <p className="eyebrow mb-6" style={{ color: "hsl(var(--primary))" }}>
                {eyebrow}
              </p>
            )}
            <h2 className="heading-lg mb-6 text-balance">{title}</h2>
            {subtitle && (
              <p className="body-lg mb-10 text-balance opacity-80">{subtitle}</p>
            )}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="gradient" size="xl" asChild>
                <Link to={primaryTo} className="inline-flex items-center gap-2">
                  {primaryLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              {secondaryLabel && secondaryTo && (
                <Button
                  size="xl"
                  asChild
                  className="bg-transparent border border-white/30 text-background hover:bg-white/10"
                >
                  <Link to={secondaryTo}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTABanner;

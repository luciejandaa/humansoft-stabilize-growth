import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface InlineCTAProps {
  text: string;
  buttonLabel: string;
  to: string;
  variant?: "light" | "lime";
}

/**
 * Lighter, in-flow CTA — a hairline card with one line of copy and a single
 * button. Used mid-page to keep momentum without breaking the reading rhythm
 * the way the full-width petrol banner does.
 */
const InlineCTA = ({ text, buttonLabel, to, variant = "light" }: InlineCTAProps) => {
  if (variant === "lime") {
    return (
      <div
        className="rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-background"
        style={{
          background: "hsl(var(--brand-petrol))",
          border: "1px solid hsl(var(--background) / 0.3)",
        }}
      >
        <p className="body-md font-medium max-w-2xl">
          {text}
        </p>
        <Button variant="gradient" size="lg" asChild className="shrink-0">
          <Link to={to} className="inline-flex items-center gap-2">
            {buttonLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card border border-border/60 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_10px_40px_-20px_hsl(0_0%_4%/0.15)]">
      <p className="body-md font-medium text-foreground max-w-2xl">{text}</p>
      <Button variant="gradient" size="lg" asChild className="shrink-0">
        <Link to={to} className="inline-flex items-center gap-2">
          {buttonLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};

export default InlineCTA;

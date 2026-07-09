import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full active:scale-[0.97] active:duration-75",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-primary hover:shadow-[0_10px_30px_-10px_hsl(0_0%_4%/0.35)] hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-foreground text-background hover:bg-primary active:bg-primary/90",
        outline: "border border-foreground/25 bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground active:bg-foreground active:text-background",
        secondary: "bg-background text-foreground hover:bg-foreground/5 active:bg-foreground/10",
        ghost: "hover:bg-foreground/5 hover:text-foreground active:bg-foreground/10",
        link: "text-foreground underline-offset-4 hover:underline rounded-none active:opacity-70",
        hero: "bg-foreground text-background text-base px-8 py-4 h-auto hover:bg-primary hover:shadow-[0_20px_50px_-15px_hsl(0_0%_4%/0.4)] hover:-translate-y-1 active:translate-y-0",
        "hero-outline": "border-2 border-foreground bg-transparent text-foreground text-base px-8 py-4 h-auto hover:bg-foreground hover:text-background active:bg-foreground/90 active:text-background",
        /* Coral CTA — electric energy, black ink, subtle black offset shadow */
        gradient: "bg-primary text-primary-foreground font-semibold shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:shadow-[5px_5px_0_0_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-[1px_1px_0_0_hsl(var(--foreground))] active:translate-x-0 active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-13 px-8 text-base py-3",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

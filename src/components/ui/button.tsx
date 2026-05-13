import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-body transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full active:scale-[0.97] active:duration-75",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-primary hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 active:bg-primary active:shadow-inner",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
        outline: "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground hover:text-background hover:border-foreground active:bg-foreground/90 active:text-background",
        secondary: "bg-secondary text-secondary-foreground hover:bg-muted active:bg-muted/80",
        ghost: "hover:bg-accent/10 hover:text-primary active:bg-primary/15 active:text-primary",
        link: "text-primary underline-offset-4 hover:underline rounded-none active:text-primary/70",
        hero: "bg-foreground text-background text-base px-8 py-4 h-auto hover:bg-primary hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.6)] hover:-translate-y-1 active:bg-primary active:shadow-inner",
        "hero-outline": "border-2 border-foreground bg-transparent text-foreground text-base px-8 py-4 h-auto hover:bg-foreground hover:text-background active:bg-foreground/90 active:text-background",
        gradient: "text-primary-foreground hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.6)] hover:-translate-y-1 bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-glow)))] active:shadow-inner active:brightness-95",
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

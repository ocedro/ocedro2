import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 px-8 py-4 font-sans text-[0.95rem] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-cedro-red text-cedro-white hover:bg-cedro-red-hover hover:-translate-y-0.5",
        outline: "bg-transparent text-cedro-light border border-cedro-sage hover:border-cedro-red hover:text-cedro-red",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, withArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }), withArrow && "group")}
        ref={ref}
        {...props}
      >
        {asChild ? children : (
          <>
            {children}
            {withArrow && <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

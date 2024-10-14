import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "uppercase mx-auto",
  {
    variants: {
      variant: {
        default: "py-[2.5rem] px-[5.7rem] tracking-[-0.1rem] font-playfair text-[3.2rem] font-[600] bg-regal-green rounded-[1.5rem] shadow-btn",
        patron: "py-[1.8rem] px-[3rem] font-spectral text-[2.1rem] font-[600] bg-regal-green rounded-[0.8rem] shadow-btn",
        gift: "text-regal-white py-[1.8rem] px-[3rem] font-spectral text-[2.3rem] font-[700] bg-regal-black rounded-[0.8rem] shadow-gift tracking-[-0.05rem]",
        brown_gift: "text-regal-black py-[1.8rem] px-[3rem] font-spectral text-[2.3rem] font-[700] bg-regal-white rounded-[0.8rem] shadow-brown_gift tracking-[-0.05rem]",
        mono: "py-[2.5rem] px-[5.7rem] font-lato text-[3.2rem] font-[400] bg-regal-green rounded-[1.5rem] shadow-mono bg-[linear-gradient(135deg,#5A5A5A,#3D3D3D)]",
        privat: "py-[2.5rem] px-[5.7rem] capitalize font-lato text-[3.2rem] font-[400] bg-regal-green rounded-[1.5rem] shadow-btn bg-[#4EA524]",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        default: "h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

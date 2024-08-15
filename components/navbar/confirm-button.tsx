"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ConfirmButtonProps extends ButtonProps {}

const ConfirmButton = ({ className, ...props }: ConfirmButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-violet-500 to-fuchsia-400",
        className
      )}
      {...props}
    >
      Yes Please :)
    </Button>
  )
}

export default ConfirmButton

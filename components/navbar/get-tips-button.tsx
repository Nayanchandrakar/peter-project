"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GetTipsButtonProps extends  ButtonProps {
  
}

const GetTipsButton = ({className , ...props}:GetTipsButtonProps) => {
  return(
    <Button className={cn(className)} variant="outline" onClick={() => {}} {...props}>
        Get 6 new tips in your inbox every Monday
    </Button>
  )
}

export default GetTipsButton
"use client"
import { Menu } from "lucide-react"

// imports here 
import ConfirmButton from "./confirm-button"
import GetTipsButton from "./get-tips-button"
import { Button } from "@/components/ui/button"
import { useMobieMenu } from "@/hooks/useMobileMenu"

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const { setIsOpen } = useMobieMenu((state) => ({
    setIsOpen: state?.setIsOpen,
  }))

  return (
    <div className="flex items-center justify-between gap-4">
      <GetTipsButton className="hidden md:inline-block" />
      <ConfirmButton className="hidden md:inline-block" />
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="md:hidden"
      >
        Menu
        <Menu className="size-4 ml-2" />
      </Button>
    </div>
  )
}

export default Navigation

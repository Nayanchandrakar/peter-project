"use client"

// types here
import { sideBarType } from "@/types/sidbar-type"

// imports here 
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useMobieMenu } from "@/hooks/useMobileMenu"
import SideBarNavigation from "@/components/sidebar/sidebar-navigation"

interface MobileNavigationProps {
  data: sideBarType[]
}

const MobileNavigation = ({ data }: MobileNavigationProps) => {
  const { isOpen, setIsOpen } = useMobieMenu((state) => ({
    isOpen: state?.isOpen,
    setIsOpen: state?.setIsOpen,
  }))

  return (
    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="p-3.5" side="left">
        <SideBarNavigation data={data} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavigation

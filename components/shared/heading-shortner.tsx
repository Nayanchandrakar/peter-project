import { cn } from "@/lib/utils"

interface HeadingShortnerProps {
  children:React.ReactNode
}

const HeadingShortner = ({children}:HeadingShortnerProps) => {
  return (
    <h3 className={cn("mt-7 mb-4 font-semibold text-lg")}>
    {children}
  </h3>
  )
}

export default HeadingShortner
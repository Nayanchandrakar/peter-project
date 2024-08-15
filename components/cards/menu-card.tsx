"use client"
import { useParams, useRouter } from "next/navigation"
import {useWindowSize} from 'usehooks-ts'

// imports here 
import { cn } from "@/lib/utils"
import { useMobieMenu } from "@/hooks/useMobileMenu"


interface MenuCardProps {
  data: {
    title: string
    items: string[]
  }
}

const MenuCard = ({ data }: MenuCardProps) => {
  const router = useRouter()
  const params = useParams<{ tag: string }>()
  const {width = 0} = useWindowSize()

  const {setIsOpen} = useMobieMenu(state => ({
    setIsOpen:state?.setIsOpen
  }))

  const tag = params?.tag

  const handleClick = (tag: string) => {
    if(width <= 768){
      setIsOpen(false)
    }
    return router?.push(`/${tag}`)
  }

  return (
    <div className="flex items-start flex-col bg-slate-100 border p-2 rounded-md">
      <h1 className="font-semibold text-sm text-zinc-900">{data?.title}</h1>
      <div className="flex flex-wrap gap-3 mt-2 border bg-white p-2 rounded-md">
        {data?.items?.map((slipTitle) => (
          <span
            key={slipTitle}
            onClick={() => handleClick(slipTitle)}
            className={cn(
              "text-xs font-normal rounded-md py-1 px-4 cursor-pointer",
              tag === slipTitle
                ? "text-white bg-gradient-to-r from-violet-500 to-fuchsia-400"
                : "bg-slate-100 text-black hover:bg-slate-200 transition-colors duration-200 border border-zinc-200"
            )}
          >
            {slipTitle}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MenuCard

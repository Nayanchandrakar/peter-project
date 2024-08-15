"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// imports here
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import { cardType } from "@/types/card-types"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface TagModelProps {
  modelData: cardType
}

const TagModel = ({ modelData }: TagModelProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const { tag, title, duration ,image} = modelData

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleOpenChange = () => {
    setIsOpen(false)
    router?.push(`/${tag}`)
  }


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
      <DialogHeader className="font-semibold">{title}</DialogHeader>
      <Image 
        alt="preview-image"
        src={image}
        width={1000}
        height={1000}
        sizes="100vw"
        className="w-full h-full rounded-md"
      />
       <DialogFooter>
        <div className="flex items-center justify-between gap-2 w-full text-sm font-semibold">
        {duration}
        <Badge className="rounded-full">
            {tag}
        </Badge>
        </div>
       </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TagModel

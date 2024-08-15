"use client"

import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { cardType } from "@/types/card-types"
import { useRouter } from "next/navigation"

interface PreviewCardProps {
  data: cardType
}

const PreviewCard = ({ data }: PreviewCardProps) => {
  const router = useRouter()
  const { duration, tag, title, image, id } = data

  const handleClick = () => {
    router?.push(`/${tag}/${id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="rounded-lg w-full h-[10rem] border  text-white relative overflow-hidden transition-all bg-black/40 duration-200 hover:bg-black/50 cursor-pointer"
    >
      <Image
        src={image}
        alt="slug-image"
        className="w-full h-full rounded-lg absolute z-[-1] object-cover"
        sizes="100vw"
        width={1000}
        height={1000}
      />
      <div className=" p-2.5 flex items-start justify-between h-full flex-col">
        <h2 className="font-bold text-sm ">{title}</h2>
        <span className="flex items-center justify-between gap-2 text-sm font-medium w-full">
          {duration}
          <Badge className="rounded-full">{tag}</Badge>
        </span>
      </div>
    </div>
  )
}

export default PreviewCard

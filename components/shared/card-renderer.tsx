// types here
import { cardType } from "@/types/card-types"

// imports here
import PreviewCard from "@/components/cards/preview-card"

interface CardRendererProps {
  data: cardType[]
}

const CardRenderer = ({ data }: CardRendererProps) => {
  return (
    <div className="w-full grid grid-cols-1 min-[900px]:grid-cols-2 min-[1080px]:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((cardData) => (
        <PreviewCard key={cardData?.id} data={cardData} />
      ))}
    </div>
  )
}

export default CardRenderer

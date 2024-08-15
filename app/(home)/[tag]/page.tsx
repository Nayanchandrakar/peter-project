import { redirect } from "next/navigation"

// imports here
import Container from "@/components/global/container"
import HeadingShortner from "@/components/shared/heading-shortner"
import { getIndividualCardMockData } from "@/app/actions/getCards"
import CardRenderer from "@/components/shared/card-renderer"

interface TagPageProps {
  params: {
    tag: string
  }
}

const TagPage = async ({ params }: TagPageProps) => {
  const tag = params?.tag

  if (!tag) {
    return redirect("/")
  }

  const cardsData = await getIndividualCardMockData(tag)

  return (
    <Container>
      <HeadingShortner>
        Search Results for &ldquo;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400">
          {params?.tag}
        </span>
        &ldquo;
      </HeadingShortner>

     {cardsData?.length === 0 ? (
      <div className="mt-8 text-sm text-zinc-600">
        No data found...
      </div>
     ) : (
      <CardRenderer data={cardsData!} />
     )}
     
    </Container>
  )
}

export default TagPage

import dynamic from "next/dynamic"

// imports here
import Container from "@/components/global/container"
import CardRenderer from "@/components/shared/card-renderer"
import HeadingShortner from "@/components/shared/heading-shortner"
import { getAllCardsMockDetailData } from "@/app/actions/getCards"

const ConfirmButton = dynamic(
  () => import("@/components/navbar/confirm-button")
)
const GetTipsButton = dynamic(
  () => import("@/components/navbar/get-tips-button")
)

const MainPage = async () => {
  const data = await getAllCardsMockDetailData()

  return (
    <Container>
      <div className="space-y-3 mt-4 md:hidden">
        <ConfirmButton className="w-full" />
        <GetTipsButton className="line-clamp-1 w-full" />
      </div>
      <HeadingShortner>All results</HeadingShortner>
      <CardRenderer data={data!} />
    </Container>
  )
}

export default MainPage

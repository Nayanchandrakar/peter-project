"use client"

import { getIndividualCardMockDataWithId } from "@/app/actions/getCards"
import TagModel from "@/components/models/tag-model"
import { redirect } from "next/navigation"

interface TagIdPageProps {
  params: {
    tag: string
    tagId: number
  }
}

const TagIdPage = async ({ params }: TagIdPageProps) => {
  const { tagId, tag } = params
  if (!tagId || !tag) redirect("/")

  const modelData = await getIndividualCardMockDataWithId(tag, tagId)

  if(!modelData) redirect("/")
    
  return <TagModel modelData={modelData} />
}

export default TagIdPage

import { cardsMockDetailsData } from "@/constants/api-data"

export const getAllCardsMockDetailData = async () => {
  try {
    return cardsMockDetailsData
  } catch (error) {
    return null
  }
}

export const getIndividualCardMockData = async (tag: string) => {
  try {
    const isExist = cardsMockDetailsData?.filter((e) => tag === e?.tag)
    return isExist
  } catch (error) {
    return null
  }
}

export const getIndividualCardMockDataWithId = async (tag: string, tagId:number) => {
  try {
    const isExist = cardsMockDetailsData?.find((e) => tag === e?.tag && Number(tagId) === e?.id)
    return isExist
  } catch (error) {
    return null
  }
}

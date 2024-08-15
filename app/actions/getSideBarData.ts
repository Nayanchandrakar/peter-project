import { sideBarData } from "@/constants/api-data"

export const getSideBarData = async() => {
    try {
        return sideBarData
    } catch (error) {
        return null
    }
}
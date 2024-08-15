// types here 
import { sideBarType } from "@/types/sidbar-type"

// imports here 
import SideBarNavigation from "./sidebar-navigation"


interface SidebarProps {
  data:sideBarType[]
}

const Sidebar = ({data}:SidebarProps) => {
  return(
    <aside className="md:mt-[62px] flex flex-col space-y-3 w-full">
        <SideBarNavigation data={data} />
    </aside>
  )
}

export default Sidebar
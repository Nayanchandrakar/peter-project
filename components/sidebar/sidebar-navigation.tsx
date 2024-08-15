
import MenuCard from "@/components/cards/menu-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sideBarType } from "@/types/sidbar-type";

interface SideBarNavigationProps {
  data:sideBarType[]
}

const SideBarNavigation = ({data:sideBarData}:SideBarNavigationProps) => {

  return <div className="p-1 md:p-3 mt-4 size-full">
    {/* <div className="space-y-6"> */}
    <ScrollArea className="size-full">
        {sideBarData?.map(data => (
            <MenuCard key={data?.title} data={data} />
        ))}
    {/* </div> */}
    </ScrollArea>
  </div>
}

export default SideBarNavigation
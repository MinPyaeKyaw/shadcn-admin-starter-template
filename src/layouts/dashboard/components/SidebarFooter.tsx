import { Settings2 } from "lucide-react";
import SidebarItem from "./SidebarItem";

function SidebarFooter() {
  return (
    <div>
      <SidebarItem
        icon={<Settings2 className="h-[18px] w-[18px]" />}
        name="Settings"
        route="settings"
      />
    </div>
  );
}

export default SidebarFooter;

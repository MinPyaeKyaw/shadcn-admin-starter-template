import SidebarItem from "./sidebar-item";
import menus from "@configs/menus";
import SidebarHeader from "./sidebar-header";
import SidebarFooter from "./sidebar-footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useUserPreference from "@stores/user-preference";
import clsx from "clsx";

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useUserPreference();

  return (
    <>
      <aside
        className={clsx(
          "transition-all duration-300 overflow-hidden fixed inset-y-0 left-0 z-10 hidden justify-center flex-col border-r bg-background sm:flex",
          sidebarCollapsed ? "w-[60px]" : "w-[250px]"
        )}
      >
        <nav className={clsx("flex flex-col gap-1 p-2 items-start")}>
          <SidebarHeader />

          {menus.map((m) => (
            <SidebarItem
              key={m.route}
              icon={m.icon}
              name={m.name}
              route={m.route}
              childs={m.childs}
            />
          ))}
        </nav>

        <nav className="mt-auto flex flex-col items-start gap-4 px-2">
          <SidebarFooter />
        </nav>
      </aside>

      <div
        onClick={toggleSidebar}
        className={clsx(
          "transition-all duration-300 fixed z-20 top-[50%] h-[22px] w-[22px] cursor-pointer bg-primary hidden sm:flex items-center justify-center rounded-full text-primary-foreground",
          sidebarCollapsed ? "left-[48px]" : "left-[238px]"
        )}
      >
        {sidebarCollapsed ? (
          <ChevronRight className="h-[18px] w-[18px]" />
        ) : (
          <ChevronLeft className="h-[18px] w-[18px]" />
        )}
      </div>
    </>
  );
}

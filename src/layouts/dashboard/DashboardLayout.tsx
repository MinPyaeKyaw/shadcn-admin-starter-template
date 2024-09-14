import { TooltipProvider } from "@components/ui/tooltip";
import { Header, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import useUserPreference from "@stores/userPreference";
import clsx from "clsx";
import { APP_GRID, APP_TRANSITION } from "@configs/ui";

export function DashboardLayout() {
  const { sidebarCollapsed } = useUserPreference();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Sidebar />

        <Header />

        <main
          className={clsx(
            "p-4 sm:mx-4 flex-1 items-start mt-14",
            APP_TRANSITION,
            APP_GRID,
            sidebarCollapsed ? "sm:pl-[60px]" : "sm:pl-[250px]"
          )}
        >
          <Outlet />
        </main>
      </div>
    </TooltipProvider>
  );
}

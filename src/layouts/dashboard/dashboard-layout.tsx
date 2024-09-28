import { TooltipProvider } from "@components/ui/tooltip";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import { Header, Sidebar } from "./components";
import useUserPreference from "@stores/user-preference";

export function DashboardLayout() {
  const { sidebarCollapsed } = useUserPreference();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Sidebar />

        <Header />

        <main
          className={clsx(
            "p-4 sm:ml-4 flex-1 items-start mt-14 grid gap-4 transition-all duration-300",
            sidebarCollapsed ? "sm:pl-[60px]" : "sm:pl-[250px]"
          )}
        >
          <Outlet />
        </main>
      </div>
    </TooltipProvider>
  );
}

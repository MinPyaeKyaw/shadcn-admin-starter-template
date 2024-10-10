import { Outlet } from "react-router-dom";
import clsx from "clsx";
import { Header, Sidebar } from "./components";
import useUserPreference from "@stores/user-preference";
import { IdleTimerProvider } from "react-idle-timer";
import { useModal } from "@saimin/react-modal-manager";
import IdleConfirmation from "@components/modals/idle-confirmation";
import { useState } from "react";

export function DashboardLayout() {
  const { sidebarCollapsed } = useUserPreference();
  const { open, close } = useModal();

  const [isIdle, setIsIdle] = useState<boolean>(false);

  const handleOnIdle = () => {
    setIsIdle(true);
    open("idle", {
      content: <IdleConfirmation />,
      animationType: "zoom",
      hideOnClickBackDrop: false,
    });
  };

  const handleOnActive = () => {
    setIsIdle(false);
    if (!isIdle) close("idle");
  };

  return (
    <IdleTimerProvider
      timeout={import.meta.env.VITE_IDLE_TIME}
      onIdle={handleOnIdle}
      onActive={handleOnActive}
    >
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
    </IdleTimerProvider>
  );
}

import { Outlet } from "react-router-dom";
import clsx from "clsx";
import { Header, Sidebar } from "./components";
import useUserPreference from "@stores/user-preference";
import { IdleTimerProvider } from "react-idle-timer";
import { useModal } from "@saimin/react-modal-manager";
import IdleConfirmation from "@components/modals/idle-confirmation";
import { useState } from "react";
import useAuthOperations from "@hooks/use-auth-operations";
import useAuth from "@hooks/use-auth";

export function DashboardLayout() {
  useAuth();

  const { sidebarCollapsed } = useUserPreference();
  const { open, closeAll } = useModal();
  const { logout } = useAuthOperations();

  const [isIdle, setIsIdle] = useState<boolean>(false);

  const handleOnIdle = () => {
    setIsIdle(true);

    if (!isIdle)
      open("idle", {
        content: <IdleConfirmation onLogout={logout} />,
        animationType: "zoom",
        hideOnClickBackDrop: false,
      });
  };

  const handleOnActive = () => {
    setIsIdle(false);
    if (!isIdle) closeAll();
  };

  return (
    <IdleTimerProvider
      timeout={import.meta.env.VITE_IDLE_TIME}
      onIdle={handleOnIdle}
      onActive={() => {
        if (!isIdle) handleOnActive();
      }}
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

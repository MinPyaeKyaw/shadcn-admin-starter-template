import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@components/ui/tooltip";
import useUserPreference from "@stores/user-preference";
import { useNavigate, useMatch, useLocation } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import Text from "@components/commons/text";
import { useTranslation } from "react-i18next";

interface Props {
  icon?: ReactNode;
  name: string;
  route: string;
  collapsible?: boolean;
  closeSheet?: Dispatch<SetStateAction<boolean>>;
  childs?: {
    icon?: ReactNode;
    name: string;
    route: string;
  }[];
}

function SidebarItem({
  icon,
  name,
  route,
  childs,
  collapsible = true,
  closeSheet,
}: Props) {
  const { sidebarCollapsed } = useUserPreference();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [showChilds, setShowChilds] = useState<boolean>(false);

  const getChildRoutes = (): string[] => {
    if (childs) {
      return childs.map((c) => c.route);
    }

    return [];
  };

  const isActiveModule = (): boolean => {
    const currentModule: string = "/" + location.pathname.split("/")[1];
    return currentModule === route;
  };

  const hasActiveChild = (): boolean => {
    if (childs) {
      const childRoutes = getChildRoutes();

      return childRoutes.includes(location.pathname.split("/").pop() as string);
    }

    return false;
  };

  const handleClick = () => {
    if (childs) {
      setShowChilds((prev) => !prev);
    } else {
      navigate(route);
      if (closeSheet) closeSheet((prev) => !prev);
    }
  };

  /** ======= Collapsed Sidebar ======= */
  if (sidebarCollapsed && collapsible) {
    return (
      <>
        {/* ======= Collapsed item with child items ======= */}
        {childs ? (
          <Popover>
            <PopoverTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={clsx(
                      "cursor-pointer my-1 ml-[5px] flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-primary md:h-8 md:w-8",
                      isActiveModule() || hasActiveChild()
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">{name}</TooltipContent>
              </Tooltip>
            </PopoverTrigger>
            <PopoverContent side="right">
              <div>
                {childs.map((c) => (
                  <ChildItem
                    key={c.route}
                    icon={c.icon}
                    name={c.name}
                    route={c.route}
                    collapsed={sidebarCollapsed}
                    closeSheet={closeSheet}
                  />
                  // <div key={c.route}>{c.name}</div>÷
                ))}
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          /* ======= Collapsed item without child items ======= */
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                onClick={handleClick}
                className={clsx(
                  "cursor-pointer my-1 ml-[5px] flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-primary md:h-8 md:w-8",
                  isActiveModule() || hasActiveChild()
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {icon}
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">{t(name)}</TooltipContent>
          </Tooltip>
        )}
      </>
    );
  }

  /** ======= Expanded Sidebar ======= */
  return (
    <>
      {/*======= Parent Menu =======*/}
      <div
        onClick={handleClick}
        className={clsx(
          "w-full h-9 flex items-center justify-between px-2 rounded-lg cursor-pointer transition-all duration-300 text-muted-foreground",
          (isActiveModule() || hasActiveChild()) &&
            "bg-primary text-primary-foreground",
          !(isActiveModule() || hasActiveChild()) && "hover:bg-primary/10"
        )}
      >
        <div className={clsx("flex items-center gap-2")}>
          <div>{icon}</div>
          <div className="min-w-[150px] overflow-hidden">
            <Text>{t(name)}</Text>
          </div>
        </div>

        {childs && (
          <ChevronDown
            className={clsx(
              "h-[15px] w-[15px] transition-all duration-500",
              showChilds && "rotate-180"
            )}
          />
        )}
      </div>

      {/*======= Child Menus =======*/}
      <div
        className={clsx(
          "overflow-hidden transition-all duration-500",
          showChilds ? "max-h-[100vh]" : "max-h-0"
        )}
      >
        {childs?.map((c) => (
          <ChildItem
            key={c.route}
            icon={c.icon}
            name={c.name}
            route={c.route}
            closeSheet={closeSheet}
          />
        ))}
      </div>
    </>
  );
}

function ChildItem({
  icon,
  name,
  route,
  collapsed = false,
  closeSheet,
}: Omit<Props, "childs"> & { collapsed?: boolean }) {
  const isMatched = useMatch(route);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
    if (closeSheet) closeSheet((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        "flex align-middle gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 text-muted-foreground",
        isMatched && "text-primary",
        !isMatched && "hover:text-primary",
        !collapsed && "pl-6"
      )}
    >
      {icon}
      <Text>{name}</Text>
    </div>
  );
}

export default SidebarItem;

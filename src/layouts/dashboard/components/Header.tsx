import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { Moon, PanelLeft, Sun } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import menus from "@configs/menus";
import SidebarItem from "./SidebarItem";
import Logo from "@components/commons/Logo";
import SearchInput from "@components/inputs/SearchInput";
import useUserPreference from "@stores/userPreference";
import clsx from "clsx";
import { APP_TRANSITION } from "@configs/ui";
import { useTheme } from "@components/theme/ThemeProvider";
import LangDropdown from "@components/commons/LangDropdown";

export function Header() {
  const { sidebarCollapsed } = useUserPreference();
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 right-0 z-10 flex gap-4 px-4 py-4 bg-background",
        APP_TRANSITION,
        sidebarCollapsed ? "left-0 sm:left-[60px]" : "sm:left-[250px] left-0"
      )}
    >
      {/* ======== Mobile Drawer Navbar ======== */}
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="sm:max-w-xs">
          <VisuallyHidden>
            <SheetTitle>Starter Template</SheetTitle>
            <SheetDescription>Starter Template</SheetDescription>
          </VisuallyHidden>
          <Logo />
          <nav className="flex flex-col gap-1 mt-4">
            {menus.map((m) => (
              <SidebarItem
                key={m.route}
                collapsible={false}
                icon={m.icon}
                name={m.name}
                route={m.route}
                childs={m.childs}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* ======== App Bar ======== */}
      <div className="flex-1 flex gap-4 items-center justify-between">
        <SearchInput />

        <LangDropdown />

        <Button
          onClick={handleToggleTheme}
          variant="outline"
          className="rounded-full h-9 w-9 flex items-center justify-center"
          size="icon"
        >
          {theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <div>S</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

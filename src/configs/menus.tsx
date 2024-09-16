import {
  CalendarDays,
  ChartColumnIncreasing,
  FileBox,
  FileText,
  LayoutDashboard,
  ShieldX,
  Table2,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
    route: "/",
  },
  {
    name: "Form",
    icon: <FileText className="h-[18px] w-[18px]" />,
    route: "/forms",
  },
  {
    name: "Table",
    icon: <Table2 className="h-[18px] w-[18px]" />,
    route: "/table",
  },
  {
    name: "Charts",
    icon: <ChartColumnIncreasing className="h-[18px] w-[18px]" />,
    route: "/charts",
  },
  {
    name: "Calendar",
    icon: <CalendarDays className="h-[18px] w-[18px]" />,
    route: "/calendar",
  },
  {
    name: "Error Pages",
    icon: <ShieldX className="h-[18px] w-[18px]" />,
    route: "error-pages",
    childs: [
      {
        name: "404 page",
        icon: <ShieldX className="h-[18px] w-[18px]" />,
        route: "404",
      },
      {
        name: "500 page",
        icon: <ShieldX className="h-[18px] w-[18px]" />,
        route: "500",
      },
    ],
  },
  {
    name: "Modals & Toasts",
    icon: <FileBox className="h-[18px] w-[18px]" />,
    route: "/modals",
  },
];

export default menus;

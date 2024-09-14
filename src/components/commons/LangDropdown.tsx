import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import useUserPreference from "@stores/userPreference";
import clsx from "clsx";
import { Earth } from "lucide-react";
import { useTranslation } from "react-i18next";

function LangDropdown() {
  const { i18n } = useTranslation();
  const { changeLang } = useUserPreference();

  const handleChangeLang = (lang: Lang) => {
    i18n.changeLanguage(lang);
    changeLang(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Earth className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleChangeLang("en")}
          className={clsx(
            "cursor-pointer",
            i18n.language === "en" &&
              "bg-primary text-white focus:text-white focus:bg-primary"
          )}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleChangeLang("mm")}
          className={clsx(
            "cursor-pointer",
            i18n.language === "mm" &&
              "bg-primary text-white focus:text-white focus:bg-primary"
          )}
        >
          Myanmar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LangDropdown;

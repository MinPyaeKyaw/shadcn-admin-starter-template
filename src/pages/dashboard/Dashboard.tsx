import { useTranslation } from "react-i18next";

export function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="h-[200vh]">
      <h1>{t("title")}</h1>
    </div>
  );
}

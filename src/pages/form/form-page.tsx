import PageTitle from "@components/commons/page-title";
import FormWithReusableInputs from "./components/FormWithReusableInputs";
import { useTranslation } from "react-i18next";

export function Form() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4 grid-cols-1">
      <PageTitle title={t("form.pageTitle")} desc={t("form.pageDesc")} />

      <FormWithReusableInputs />
    </div>
  );
}

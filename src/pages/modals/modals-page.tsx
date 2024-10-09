import { useModal } from "@saimin/react-modal-manager";
import ModalCard from "./components/ModalCard";
import DemoModal from "@components/modals/demo";
import PageTitle from "@components/commons/page-title";
import modals from "./mock-data/modals";
import { useTranslation } from "react-i18next";

export function Modals() {
  const { t } = useTranslation();
  const { open } = useModal();

  const handleOpenModal = (id: string, modalProps: any): void => {
    open(id, {
      content: <DemoModal />,
      ...modalProps,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <PageTitle title={t("modal.pageTitle")} desc={t("modal.pageDesc")} />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modals.map((m) => (
            <ModalCard key={m.id} modal={m} open={handleOpenModal} />
          ))}
        </div>
      </div>
    </div>
  );
}

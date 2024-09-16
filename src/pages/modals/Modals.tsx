// import { ToastAction } from "@components/ui/toast";
// import { useToast } from "@hooks/use-toast";
import { useModal } from "@saimin/react-modal-manager";
import ModalCard from "./components/ModalCard";
import PageTtile from "./components/PageTitle";
import modals from "./mock-data/modals";
import DemoModal from "@components/modals/DemoModal";

export function Modals() {
  const { open } = useModal();
  // const { toast } = useToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpenModal = (id: string, modalProps: any): void => {
    open(id, {
      content: <DemoModal />,
      ...modalProps,
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <PageTtile />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modals.map((m) => (
            <ModalCard key={m.id} modal={m} open={handleOpenModal} />
          ))}
        </div>
      </div>

      <div>
        <PageTtile />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modals.map((m) => (
            <ModalCard key={m.id} modal={m} open={handleOpenModal} />
          ))}
        </div>
      </div>
    </div>
  );
}

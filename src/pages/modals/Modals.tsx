import { ToastAction } from "@components/ui/toast";
import { useToast } from "@hooks/use-toast";
import { useModal } from "@saimin/react-modal-manager";
import ModalCard from "./components/ModalCard";
import ToastCard from "./components/ToastCard";
import DemoModal from "@components/modals/DemoModal";
import PageTitle from "@components/commons/PageTitle";
import toasts from "./mock-data/toasts";
import modals from "./mock-data/modals";

export function Modals() {
  const { open } = useModal();
  const { toast } = useToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpenModal = (id: string, modalProps: any): void => {
    open(id, {
      content: <DemoModal />,
      ...modalProps,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOpenToast = (toastProps: any): void => {
    toast({
      ...toastProps,
      ...(toastProps.action
        ? { action: <ToastAction altText="Try again">Try again</ToastAction> }
        : {}),
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <PageTitle
          title="Customizable & Reusable Toast Components"
          desc="Easily create dynamic, scalable forms with customizable, reusable
        components. Simplify development with built-in validation,
        accessibility, and flexible styling options for any project."
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {toasts.map((t) => (
            <ToastCard key={t.id} toast={t} open={handleOpenToast} />
          ))}
        </div>
      </div>

      <div>
        <PageTitle
          title="Customizable & Reusable Toast Components"
          desc="Easily create dynamic, scalable forms with customizable, reusable
        components. Simplify development with built-in validation,
        accessibility, and flexible styling options for any project."
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {modals.map((m) => (
            <ModalCard key={m.id} modal={m} open={handleOpenModal} />
          ))}
        </div>
      </div>
    </div>
  );
}

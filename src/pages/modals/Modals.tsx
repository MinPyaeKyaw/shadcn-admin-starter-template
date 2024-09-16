import DemoModal from "@components/modals/DemoModal";
import { Button } from "@components/ui/button";
import { ToastAction } from "@components/ui/toast";
import { useToast } from "@hooks/use-toast";
import { useModal } from "@saimin/react-modal-manager";

export function Modals() {
  const { open } = useModal();
  const { toast } = useToast();

  const openMyModal = () => {
    open("my-modal", {
      content: <DemoModal />,
      backdropOpacity: 0.5,
      fullscreen: false,
      position: "center",
      animationType: "zoom",
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <Button onClick={openMyModal}>Open Modal</Button>

      <Button onClick={openMyModal}>Open Modal</Button>

      <Button onClick={openMyModal}>Open Modal</Button>

      <Button onClick={openMyModal}>Open Modal</Button>

      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction
                onClick={() => console.log("action")}
                altText="Try again"
              >
                Try again
              </ToastAction>
            ),
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}

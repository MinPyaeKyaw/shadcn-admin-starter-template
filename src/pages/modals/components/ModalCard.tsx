import Text from "@components/commons/text";
import { Button } from "@components/ui/button";

interface Props {
  modal: {
    id: string;
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modalProps?: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  open: (id: string, modalProps: any) => void;
}

function ModalCard({ modal, open }: Props) {
  return (
    <div className="block bg-background border rounded-lg space-y-4 p-4">
      <Text size="xl" weight="bold">
        {modal.title}
      </Text>

      <Text className="text-muted-foreground">{modal.description}</Text>
      <Button onClick={() => open(modal.id, modal.modalProps)}>
        Open Modal
      </Button>
    </div>
  );
}

export default ModalCard;

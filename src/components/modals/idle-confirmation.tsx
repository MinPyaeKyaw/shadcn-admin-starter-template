import Text from "@components/commons/text";
import { Button } from "@components/ui/button";
import { useModal } from "@saimin/react-modal-manager";

interface Props {
  onLogout: () => void;
}

function IdleConfirmation({ onLogout }: Props) {
  const { closeAll } = useModal();

  const handleLogout = () => {
    onLogout();
    closeAll();
  };

  return (
    <div className="w-[400px] rounded-lg overflow-hidden bg-background p-4">
      <Text size="lg">
        <b>You have been idled</b>
      </Text>

      <br />

      <div className="flex gap-4 justify-end">
        <Button onClick={handleLogout} variant="secondary">
          Log out
        </Button>

        <Button onClick={closeAll}>Continue</Button>
      </div>
    </div>
  );
}

export default IdleConfirmation;

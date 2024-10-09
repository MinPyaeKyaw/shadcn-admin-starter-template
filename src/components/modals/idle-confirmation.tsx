import Text from "@components/commons/text";
import { Button } from "@components/ui/button";
import useAuthOperations from "@hooks/use-auth-operations";
import { useModal } from "@saimin/react-modal-manager";

function IdleConfirmation() {
  const { close } = useModal();
  const { logout } = useAuthOperations();

  return (
    <div className="w-[400px] rounded-lg overflow-hidden bg-background p-4">
      <Text size="lg">
        <b>You have been idle</b>
      </Text>

      <br />

      <div className="flex gap-4 justify-end">
        <Button onClick={logout} variant="secondary">
          Log out
        </Button>

        <Button onClick={() => close("idle")}>Continue</Button>
      </div>
    </div>
  );
}

export default IdleConfirmation;

import Text from "@components/commons/text";
import { Button } from "@components/ui/button";
import useAuthOperations from "@hooks/use-auth-operations";
import { useModal } from "@saimin/react-modal-manager";

function LogoutConfirmation() {
  const { close } = useModal();
  const { logout } = useAuthOperations();

  const handleCancel = () => {
    close("logout-confirmation");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-[400px] rounded-lg overflow-hidden bg-background p-4">
      <Text size="lg">
        <b>Are you sure to exit?</b>
      </Text>

      <br />

      <div className="flex gap-4 justify-end">
        <Button onClick={handleCancel} variant="secondary">
          Cancel
        </Button>

        <Button onClick={handleLogout}>Yes</Button>
      </div>
    </div>
  );
}

export default LogoutConfirmation;

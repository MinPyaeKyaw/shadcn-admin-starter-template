import Text from "@components/commons/Text";
import { Button } from "@components/ui/button";

interface Props {
  toast: {
    id: string;
    title: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toastProps?: any;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  open: (toastProps: any) => void;
}

function ToastCard({ toast, open }: Props) {
  return (
    <div className="block bg-background border rounded-lg space-y-4 p-4">
      <Text size="xl" weight="bold">
        {toast.title}
      </Text>

      <Text className="text-muted-foreground">{toast.description}</Text>
      <Button onClick={() => open(toast.toastProps)}>Show Toast</Button>
    </div>
  );
}

export default ToastCard;

import { useModal } from "@saimin/react-modal-manager";

export function Modals() {
  const { open } = useModal();

  const openMyModal = () => {
    open("my-modal", {
      content: <div>My Modal Content</div>,
      backdropOpacity: 0.5,
      fullscreen: false,
      position: "center",
      animationType: "zoom",
    });
  };

  return (
    <div>
      <button onClick={openMyModal}>Open Modal</button>
    </div>
  );
}

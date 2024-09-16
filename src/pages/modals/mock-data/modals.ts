const modals = [
  {
    id: "default",
    title: "Default Modal",
    description:
      "This is a standard modal without any special animations or customizations.",
  },
  {
    id: "zoom",
    title: "Modal with zoom animation",
    description:
      "This modal opens with a zoom effect, making the modal content appear as if it's zooming in.",
    modalProps: {
      animationType: "zoom",
    },
  },
  {
    id: "fade",
    title: "Modal with fade animation",
    description:
      "This modal uses a fade animation, making the modal content gradually appear or disappear.",
    modalProps: {
      animationType: "fade",
    },
  },
  {
    id: "slide-top",
    title: "Modal with slide from top animation",
    description:
      "This modal slides down from the top of the screen when opening and back up when closing.",
    modalProps: {
      animationType: "slide-from-top",
    },
  },
  {
    id: "slide-down",
    title: "Modal with slide from bottom animation",
    description:
      "This modal slides up from the bottom of the screen when opening and back down when closing.",
    modalProps: {
      animationType: "slide-from-bottom",
    },
  },
  {
    id: "backdrop-opacity",
    title: "Modal with customized backdrop",
    description:
      "This modal has a custom backdrop with 80% opacity and a pink background, combined with a zoom animation.",
    modalProps: {
      backdropOpacity: 0.8,
      backdropColor: "pink",
      animationType: "zoom",
    },
  },
];

export default modals;

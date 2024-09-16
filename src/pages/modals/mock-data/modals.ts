const modals = [
  {
    id: "default",
    title: "Default Modal",
    description: "description",
  },
  {
    id: "zoom",
    title: "Modal with zoom animation",
    description: "description",
    modalProps: {
      animationType: "zoom",
    },
  },
  {
    id: "fade",
    title: "Modal with fade animation",
    description: "description",
    modalProps: {
      animationType: "fade",
    },
  },
  {
    id: "slide-top",
    title: "Modal with slide from top animation",
    description: "description",
    modalProps: {
      animationType: "slide-from-top",
    },
  },
  {
    id: "slide-down",
    title: "Modal with slide from bottom animation",
    description: "description",
    modalProps: {
      animationType: "slide-from-bottom",
    },
  },
  {
    id: "backdrop-opacity",
    title: "Modal with customized backdrop",
    description: "description",
    modalProps: {
      backdropOpacity: 0.8,
      backdropColor: "pink",
      animationType: "zoom",
    },
  },
];

export default modals;

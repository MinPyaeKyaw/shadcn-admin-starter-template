const toasts = [
  {
    id: "default",
    title: "Default Toast",
    description:
      "A basic toast notification with a message to inform users about the status of their request.",
    toastProps: {
      description: "There was a problem with your request.",
    },
  },
  {
    id: "title",
    title: "Toast with Title",
    description:
      "A toast notification with a bold title, offering more emphasis on the alert message.",
    toastProps: {
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    },
  },
  {
    id: "action",
    title: "Toast with Action",
    description:
      "A toast notification that includes an action button, allowing users to take immediate action on the alert.",
    toastProps: {
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: true,
    },
  },
  {
    id: "error",
    title: "Error Toast",
    description:
      "A destructive variant of the toast, signaling an error or critical issue that requires attention.",
    toastProps: {
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    },
  },
];

export default toasts;

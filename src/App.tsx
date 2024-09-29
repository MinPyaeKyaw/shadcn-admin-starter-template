import { ThemeProvider } from "@components/theme/theme-provider";
import { Toaster } from "@components/ui/sonner";
import { router } from "@configs/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;

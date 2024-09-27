import { ThemeProvider } from "@components/theme/theme-provider";
import { Toaster } from "@components/ui/toaster";
import { router } from "@configs/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider } from "@components/theme/theme-provider";
import { Toaster } from "@components/ui/sonner";
import { router } from "@configs/routes";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

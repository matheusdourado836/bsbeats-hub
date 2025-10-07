import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RestaurantDetails from "./pages/RestaurantDetails";
import PostDetails from "./pages/PostDetails";
import NotFound from "./pages/NotFound";
import { useDeepLinking } from "./hooks/useDeepLinking";

const queryClient = new QueryClient();

const AppContent = () => {
  useDeepLinking();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurant/:id/details" element={<RestaurantDetails />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

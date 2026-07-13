import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import ReferencesPage from "./pages/ReferencesPage";
import ContactPage from "./pages/ContactPage";
import EvaluationPage from "./pages/EvaluationPage";
import BlogPage from "./pages/BlogPage";
import TeamPage from "./pages/TeamPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sluzby" element={<ServicesPage />} />
          <Route path="/proces" element={<ProcessPage />} />
          <Route path="/reference" element={<ReferencesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/hodnoceni" element={<EvaluationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/tym" element={<TeamPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

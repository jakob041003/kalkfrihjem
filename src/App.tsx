
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import GuidePage from "./pages/GuidePage";
import InstallationPage from "./pages/InstallationPage";
import KalkKortPage from "./pages/KalkKortPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/test-blødgøringsanlæg" element={<TestPage />} />
              <Route path="/blødgøringsanlæg-guide" element={<GuidePage />} />
              <Route path="/installation" element={<InstallationPage />} />
              <Route path="/kalk-i-danmark" element={<KalkKortPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

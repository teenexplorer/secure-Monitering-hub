import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Adm from "./pages/Adm";
import Subdivision from "./pages/Subdivision";
import GPList from "./pages/GPList";
import GPQuestionnaire from "./pages/GPQuestionnaire";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Navigation />
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adm"
              element={
                <ProtectedRoute>
                  <Adm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subdivision"
              element={
                <ProtectedRoute>
                  <Subdivision />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gp-list"
              element={
                <ProtectedRoute>
                  <GPList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gp-questionnaire/:gpId"
              element={
                <ProtectedRoute>
                  <GPQuestionnaire />
                </ProtectedRoute>
              }
            />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
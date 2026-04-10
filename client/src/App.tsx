import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/owner"} component={Owner} />
      <Route path={"/about"} component={About} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

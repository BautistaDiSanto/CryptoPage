import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { Home } from "./components/home";
import { Currencies } from "./components/currencies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./pages/detail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/currencies" component={Currencies} />
          <Route exact path="/currencies/:coinId" component={Detail} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

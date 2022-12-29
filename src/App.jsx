import "./App.css";
import { React } from "react";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import img from "./shared/logo-pet.jpg";

// query is like a cache
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Link to="/">
            <div className="header-fix">
              <img src={img} height="50px" alt="logo"></img>
              <h2 className="h2-fix">
                Find Your <span className="dream-color">Dream</span> Pet Here
              </h2>
            </div>
          </Link>

          <Routes>
            <Route path="/details/:id" element={<Details />}>
              AA
            </Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

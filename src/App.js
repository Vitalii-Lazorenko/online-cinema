import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
const MainPage = React.lazy(() => import('./components/MainPage'));
const SearchResults = React.lazy(() => import('./components/SearchResults'));
const movieDetails = React.lazy(() => import('./components/movieDetails/movieDetails'));

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <h1>Завантаження...</h1>
              </div>
            }
          >
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <MainPage
                    {...props}
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                  />
                )}
              />

              <Route
                path="/search"
                render={(props) => (
                  <SearchResults {...props} setSearchTerm={setSearchTerm} />
                )}
              />
              <Route path="/movie/:id" component={movieDetails} />
            </Switch>
          </Suspense>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
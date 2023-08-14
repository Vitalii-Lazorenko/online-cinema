import React, { Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const MainPage = React.lazy(() => import('./components/mainPage'));
const SearchResults = React.lazy(() => import('./components/SearchResults'));
const movieDetails = React.lazy(() => import('./components/movieDetails/movieDetails'));

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div className="app">
     
          <div>
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
                    <h1>Loading...</h1>
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
          </div>
      </div>
  </BrowserRouter> 
  );
}

export default App;
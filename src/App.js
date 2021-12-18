import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import SearchPerson from "./pages/searchPerson/SearchPerson";
import Profile from "./pages/profile/Profile";
import Favs from "./pages/favorites/Favs";

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/search/:keyword">
            <SearchPerson />
          </Route>
          <Route exact path="/favs">
            <Favs />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

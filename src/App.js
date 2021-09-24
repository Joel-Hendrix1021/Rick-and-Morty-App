import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import Home from "./pages/home/Home";
import SearchPerson from "./pages/searchPerson/SearchPerson";
import Profile from "./pages/profile/Profile";
import Favs from "./pages/Favs";



function App() {
  const [search, setSearch] = useState('')
  const [fav, setFav] = useState([])
  
  const handleSearches = (query) => {
     setSearch(query)
  }
  const handleFavs = (query) => {

  }

  return (
    <div className="App">
       <BrowserRouter>
      <Header handleSearches={handleSearches}/>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/search/:keyword">
            <SearchPerson handleFavs={handleFavs}/>
          </Route>
          <Route exact path="/favs">
            <Favs />
          </Route>
          <Route exact path="/">
            <Home handleFavs={handleFavs}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

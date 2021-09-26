import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import Home from "./pages/home/Home";
import SearchPerson from "./pages/searchPerson/SearchPerson";
import Profile from "./pages/profile/Profile";
import Favs from "./pages/favorites/Favs";

function App() {
  const [search, setSearch] = useState("");

  const getLocal = window.localStorage.getItem("likes");
  console.log(getLocal)

  const [likes, setLikes] = useState(getLocal? getLocal.split(",").map((item) => Number(item)) : []);

  const handleSearches = (query) => {
    setSearch(query);
  };

  const handleFavs = (id) => {
    if (likes.includes(id)) {
      setLikes((likes) => likes.filter((x) => x !== id));
    } else {
      setLikes((like) => [...like, id]);
    }
    
  };

  window.localStorage.setItem('likes', likes)
  return (
    <div className="App">
      <BrowserRouter>
        <Header handleSearches={handleSearches}/>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/search/:keyword">
            <SearchPerson handleFavs={handleFavs} />
          </Route>
          <Route exact path="/favs">
            <Favs likes={likes} handleFavs={handleFavs}/>
          </Route>
          <Route exact path="/">
            <Home handleFavs={handleFavs} likes={likes}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

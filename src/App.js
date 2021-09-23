import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import SearchPerson from "./pages/SearchPerson";

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
          <Route exact path="/">
            <Home handleFavs={handleFavs}/>
          </Route>
          <Route path="/search/:keyword">
            <SearchPerson handleFavs={handleFavs}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

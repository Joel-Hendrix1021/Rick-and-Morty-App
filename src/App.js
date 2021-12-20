import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SearchPerson from "./pages/searchPerson/SearchPerson";
import Profile from "./pages/profile/Profile";
import Favs from "./pages/favorites/Favs";
import Error404 from "./pages/404/Error404";

function App () {
    return (
        <div className="App">
            <BrowserRouter basename="/Rick-and-Morty-App">
                <Header/>
                <Switch>
                    <Route path="/profile/:id" component={Profile} />

                    <Route path="/search/:keyword" component={SearchPerson}/>
                    <Route exact path="/favs" component={Favs}/>

                    <Route exact path="/" component={Home}/>

                    <Route exact path="*" component={Error404}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

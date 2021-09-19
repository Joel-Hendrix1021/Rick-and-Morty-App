import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/profile/:id">
            <Profile />
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

import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/Home/Homepage";
import SourcesPage from "./pages/Sources/Sources";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sources" component={SourcesPage} />
      </Switch>
    </div>
  );
}

export default App;

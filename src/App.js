import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Page from "./routes/Page"

import Navigation from "./components/Navigation";

function App() {
    return (
      <Router>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/page" component={Page} />
        <Redirect to={"/"}/>
      </Router>
    );
}
//redirect method in line 16 prevents the user from moving to another page by typing ex) /page1 besides the homepage url.
export default App;
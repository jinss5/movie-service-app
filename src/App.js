import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./movie/Home";
import About from "./movie/routes/About";
import Detail from "./movie/routes/Detail";
import Page from "./movie/routes/Page";
import Navigation from "./movie/components/Navigation";

function App() {
    return (
      <Router>
        <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/about" component={About} />
          <Route path="/page" component={Page} />
          <Redirect to={"/"}/>
      </Router>
    );
}
//redirect method in line 15 prevents the user from moving to another page by typing ex) /page1 besides the homepage url.
export default App;
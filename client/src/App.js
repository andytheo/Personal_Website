import React from "react";
import { useEffect } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";
import Blog from "./components/blog/Blogposts";
import Switching from "./components/blog/SwitchingCareer";
import Learn from "./components/blog/Learn";
import Contact from "./components/contact/ContactClone";
import { Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile" component={Profile}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/blog-switching-career" component={Switching}></Route>
      <Route exact path="/blog-learn" component={Learn}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
  );
}

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

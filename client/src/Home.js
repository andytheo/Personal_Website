import { useEffect } from "react";
import Nav from "./components/home/Nav";
import Intro from "./components/home/Intro";
import Profile from "./components/home/Profile";
import ProjectsHome from "./components/home/ProjectsHome";
import Blog from "./components/home/Blog";
import Icons from "./components/home/Icons";
import ReactGA from "react-ga";

function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div>
      <Nav />
      <Intro />
      <Profile />
      <ProjectsHome />
      <Blog />
      <Icons />
    </div>
  );
}

export default Home;

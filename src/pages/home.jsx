import About from "./about";
import Blog from "./blog";
import Client from "./client";
import Contact from "./contact";
import Header from "./header";
import Portfolio from "./portfolio";
import Skill from "./skill";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Blog />
      <Client />
      <Contact />
    </>
  );
};

export default Home;

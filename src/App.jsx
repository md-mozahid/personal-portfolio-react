import NavbarSection from "./container/navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./pages/header";
import Portfolio from "./pages/portfolio";
import Skill from "./pages/skill";

function App() {
  return (
    <>
      <NavbarSection />
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;

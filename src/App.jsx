import { Routes, Route } from "react-router-dom";
import Navbar from "./container/navbar/navbar";
import Footer from "./container/footer/footer";
import {
  About,
  Blog,
  Client,
  Contact,
  Header,
  Home,
  Portfolio,
  PageNotFound,
  Skill,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skill />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="client" element={<Client />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

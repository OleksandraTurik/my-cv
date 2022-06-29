import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Skills } from "./pages/skills/skills";
import { Portfolio } from "./pages/portfolio/portfolio";
import Layout from "./components/Layout";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

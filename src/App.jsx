import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header.jsx";
import "./App.css";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

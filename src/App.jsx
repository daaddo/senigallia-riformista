import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import CandidatesPage from "./pages/CandidatesPage.jsx";
import CandidatePage from "./pages/CandidatePage.jsx";
import ProgrammaPage from "./pages/ProgrammaPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./App.css";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main" className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidati" element={<CandidatesPage />} />
          <Route path="/candidati/:slug" element={<CandidatePage />} />
          <Route path="/programma" element={<ProgrammaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

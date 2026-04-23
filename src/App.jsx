import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CandidatesList from "./components/CandidatesList.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main id="main" className="main">
        <Hero />
        <CandidatesList />
      </main>
      <Footer />
    </>
  );
}

export default App;

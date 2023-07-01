import { useState } from "react";
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./App.css";
import Background from "./Background";

function App() {
  const [page, setPage] = useState("about");

  return (
    <div className="App">
      <Background />
      <div className="content">
        <Header setPage={setPage} />
        {page === "projects" ? (
          <>
            <Projects />
          </>
        ) : page === "contact" ? (
          <Contact />
        ) : (
          <>
            <HomePage />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;

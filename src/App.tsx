import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Footer = () => {
  return (
    <footer className="w-full bottom-0  border-t-2 border-green-500 bg-gray-800">
      <p className="text-white text-center p-2">
        &copy; Mahmoud Al Jarad {new Date().getFullYear()}
      </p>
    </footer>
  );
};

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

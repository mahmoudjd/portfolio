import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <Router>
                <Header/>
                <main className="flex-grow">
                    <Hero/>
                    <Routes>
                        <Route path="/" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

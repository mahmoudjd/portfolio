import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InfoPage from "./pages/InfoPage"
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <Router>
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<InfoPage />}/>
                        <Route path="/projects" element={<ProjectsPage />}/>
                        <Route path="/skills" element={<SkillsPage />}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

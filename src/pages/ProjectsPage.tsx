import Projects from "../components/Projects";
import Hero from "../components/hero";
import {useEffect} from "react";

const ProjectsPage = () => {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "auto" });
    })

    return (
        <>
            <Hero
                title="Projects"
                subtitle="A selection of projects I've worked on, each showcasing my skills in frontend, backend, and DevOps."
            />

            <Projects/>
        </>
    )
}

export default ProjectsPage;
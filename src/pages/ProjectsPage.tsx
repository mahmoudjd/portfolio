import Projects from "../components/Projects";
import Hero from "../components/hero";

const ProjectsPage = () => {
    return (
        <>
            <Hero
                title="Projects"
                subtitle="A selection of projects I've worked on — from client applications to internal tools, each showcasing my skills in frontend, backend, and DevOps."
            />

            <Projects/>
        </>
    )
}

export default ProjectsPage;
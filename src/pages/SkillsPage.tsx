import Hero from "../components/hero";
import Skills from "../components/Skills";

const SkillsPage = () => {
    return (
        <>
            <Hero
                title="My Skills"
                subtitle="Explore the tools, languages, and technologies that I use to build performant and scalable web applications."
            />

            <Skills/>
        </>
    )
}

export default SkillsPage;
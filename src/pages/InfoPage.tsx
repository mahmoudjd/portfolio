import Hero from "../components/hero";
import About from "../components/About";

const InfoPage = () => {
    return (
        <>
            <Hero title="Welcome to My Portfolio!"
                  subtitle="I’m Mahmoud Al Jarad, a Fullstack Developer passionate about modern web technologies and user-centered design. Currently, I’m working at LivEye GmbH where I contribute to innovative projects and continuously expand my skills."/>
            <About/>
        </>
    )
}

export default InfoPage;
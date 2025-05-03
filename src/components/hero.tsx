import React from "react";

interface HeroProps {
    title: string;
    subtitle: string;
}

const Hero = ({title, subtitle}: HeroProps) => {
    return (
        <section className="text-center py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default Hero;

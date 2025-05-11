import React, {useState} from "react";
import {useParams, Link} from "react-router-dom";
import {Container} from "../components/ui/container";
import {Badge} from "../components/ui/badge";
import {List} from "../components/ui/list";
import {FaGithub} from "react-icons/fa";
import {projects} from "../data/projects";
import { useEffect } from "react";
import {ImageModal} from "../components/ImageModal";

const ProjectDetailPage = () => {
    const {projectId} = useParams();
    const project = projects.find((p) => p.id === projectId);
    const [modalIndex, setModalIndex] = useState<number | null>(null);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    if (!project) {
        return (
            <Container>
                <div className="text-center text-red-400 text-xl py-20">
                    Projekt nicht gefunden.
                </div>
            </Container>
        );
    }

    const hasGallery = Array.isArray(project.images) && project.images.length > 0;
    const images = hasGallery ? project.images : [];

    const openModal = (index: number) => setModalIndex(index);
    const closeModal = () => setModalIndex(null);

    const prevImage = () => {
        if (modalIndex !== null && images.length > 0) {
            const prev = (modalIndex - 1 + images.length) % images.length;
            setModalIndex(prev);
        }
    };

    const nextImage = () => {
        if (modalIndex !== null && images.length > 0) {
            const next = (modalIndex + 1) % images.length;
            setModalIndex(next);
        }
    };

    return (
        <Container className="space-y-10">
            <Link to="/projects" className="text-green-400 hover:text-green-300 text-sm font-medium">
                &larr; Back to Projects
            </Link>

            <div className="flex flex-col w-full space-y-10 items-start">
                <div className="w-full mx-auto max-w-4xl">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full rounded-2xl shadow-xl object-cover max-h-[500px]"
                        loading="lazy"
                    />
                </div>

                <div className="w-full space-y-6">
                    <h1 className="text-4xl font-extrabold text-green-400">{project.title}</h1>
                    <p className="text-gray-300 text-base leading-relaxed">{project.description}</p>

                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">Technologien:</h2>
                        <List wrap>
                            {project.technologies.map((tech, index) => (
                                <Badge key={index} title={tech} variant="secondary"/>
                            ))}
                        </List>
                    </div>

                    <div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium"
                        >
                            <FaGithub className="text-lg"/>
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>

            {hasGallery && (
                <div>
                    <h2 className="text-xl text-white font-semibold mb-4">More images:</h2>
                    <List grid>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Screenshot ${index + 1}`}
                                onClick={() => openModal(index)}
                                className="w-full h-64 object-cover rounded-xl shadow-lg cursor-pointer"
                                loading="lazy"
                            />
                        ))}
                    </List>
                </div>
            )}

            {modalIndex !== null && (
                <ImageModal
                    images={images}
                    currentIndex={modalIndex}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </Container>
    );
};

export default ProjectDetailPage;

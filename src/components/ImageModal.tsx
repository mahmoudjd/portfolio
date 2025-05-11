import React, {useState} from "react";
import {FaChevronLeft, FaChevronRight, FaTimes} from "react-icons/fa";

interface ImageModalProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
                                                          images,
                                                          currentIndex,
                                                          onClose,
                                                          onNext,
                                                          onPrev,
                                                      }) => {
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden"
                onClick={stopPropagation}
            >
                {/* Close Button */}
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="text-white bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
                    >
                        <FaTimes size={20}/>
                    </button>
                </div>

                {/* Prev Button */}
                <button
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-10"
                >
                    <FaChevronLeft size={24}/>
                </button>

                {/* Next Button */}
                <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-10"
                >
                    <FaChevronRight size={24}/>
                </button>

                {/* Main Image */}
                <div className="flex justify-center items-center bg-black">
                    <img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        onLoad={() => setLoaded(true)}
                        className={`max-h-[80vh] w-auto object-contain mx-auto transition-opacity duration-500 ${
                            loaded ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>

                {/* Thumbnails */}
                <div className="bg-black/90 px-4 py-3 flex gap-2 overflow-x-auto border-t border-gray-700">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Thumbnail ${i + 1}`}
                            onClick={() => {
                                if (i !== currentIndex) {
                                    const evt = new CustomEvent("jumpToImage", {detail: i});
                                    dispatchEvent(evt);
                                }
                            }}
                            className={`h-16 w-24 object-cover rounded-md cursor-pointer transition-all duration-200 ${
                                i === currentIndex
                                    ? "ring-2 ring-green-400 scale-105"
                                    : "opacity-60 hover:opacity-90"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

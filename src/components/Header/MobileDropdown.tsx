import React, { useRef, useEffect } from "react";
import NavbarLink from "./NavbarLink";

interface MobileDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen, onClose }) => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={menuRef}
            className="md:hidden absolute top-full right-4 w-48 border border-green-500 rounded-lg bg-gray-800 shadow-xl overflow-hidden z-50"
        >
            <div className="flex flex-col space-y-2 p-2">
                <NavbarLink to="/" text="About" handleClick={onClose} />
                <NavbarLink to="/projects" text="Projects" handleClick={onClose} />
                <NavbarLink to="/skills" text="Skills" handleClick={onClose} />
            </div>
        </div>
    );
};

export default MobileDropdown;

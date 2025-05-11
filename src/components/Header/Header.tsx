import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Avatar from "./Avatar";
import NavbarLink from "./NavbarLink";
import MobileDropdown from "./MobileDropdown";
import img1 from "../../assets/mahmoud.jpeg";
import { Container } from "../ui/container";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 text-white border-b-2 border-green-700 shadow-lg bg-black">
            <Container className="flex items-center justify-between px-4 py-3">
                <Avatar image={img1} name="Mahmoud Al Jarad" />

                <nav className="hidden md:flex space-x-4 text-lg">
                    <NavbarLink to="/" text="About" />
                    <NavbarLink to="/projects" text="Projects" />
                    <NavbarLink to="/skills" text="Skills" />
                </nav>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <HiMenu />
                </button>
            </Container>

            <MobileDropdown isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
};

export default Header;

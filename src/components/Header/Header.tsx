import React, {useState} from "react";
import {HiMenu, HiX} from "react-icons/hi";
import Avatar from "./Avatar";
import NavbarLink from "./NavbarLink";
import img1 from "../../assets/mahmoud.jpeg";
import {Container} from "../ui/container";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full  text-white sticky top-0 z-50 border-b-2 border-green-700 shadow-lg">
            <Container className="w-full mx-auto px-4 py-3 flex items-center justify-between">
                <Avatar image={img1} name="Mahmoud Al Jarad"/>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-lg">
                    <NavbarLink to="/" text="About"/>
                    <NavbarLink to="/projects" text="Projects"/>
                    <NavbarLink to="/skills" text="Skills"/>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <HiX/> : <HiMenu/>}
                </button>
            </Container>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 px-6 py-4 space-y-3">
                    <NavbarLink to="/" text="About" handleClick={() => setIsMenuOpen(false)}/>
                    <NavbarLink to="/projects" text="Projects" handleClick={() => setIsMenuOpen(false)}/>
                    <NavbarLink to="/skills" text="Skills" handleClick={() => setIsMenuOpen(false)}/>
                </div>
            )}
        </header>
    );
};

export default Header;

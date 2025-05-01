import NavbarLink from "./NavbarLink";

const Navbar = () => {
    return (
        <nav>
            <ul className="flex space-x-6 text-lg">
                <li><NavbarLink to="/" text="About" /></li>
                <li><NavbarLink to="/projects" text="Projects" /></li>
                <li><NavbarLink to="/skills" text="Skills" /></li>
                <li><NavbarLink to="/contact" text="Contact" /></li>
            </ul>
        </nav>
    );
};

export default Navbar;
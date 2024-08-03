import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <ul className="list-none flex flex-row gap-2 text-xl">
      <li>
        <NavbarLink to={"/"} text={"About"} />
      </li>

      <li>
        <NavbarLink to={"/projects"} text={"Projects"} />
      </li>
      <li>
        <NavbarLink to={"/skills"} text={"Skills"} />
      </li>
      <li>
        <NavbarLink to={"/contact"} text={"Contact"} />
      </li>
    </ul>
  );
};

export default Navbar;

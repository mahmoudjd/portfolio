const Navbar = () => {
  return (
    <ul className="list-none flex flex-row gap-2 text-white">
      <li className="hover:text-green-500 text-xl">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-green-500 text-xl">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:text-green-500 text-xl">
        <a href="#skills">Skills</a>
      </li>
      <li className="hover:text-green-500 text-xl">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;

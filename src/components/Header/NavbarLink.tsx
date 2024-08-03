import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const NavbarLink = ({ to, text }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-green-500" : "text-white hover:text-green-500"
      }
    >
      {text}
    </NavLink>
  );
};

export default NavbarLink;

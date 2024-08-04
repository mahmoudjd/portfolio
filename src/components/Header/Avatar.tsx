import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  image: string;
}

const Avatar = ({ image, name }: Props) => {
  return (
    <div className="flex flex-row p-4 gap-2 items-center justify-center">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <h2 className="text-2xl text-white max-md:text-xl">
        <NavLink to="/">{name}</NavLink>
      </h2>
    </div>
  );
};

export default Avatar;

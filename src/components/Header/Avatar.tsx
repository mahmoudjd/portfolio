import { NavLink } from "react-router-dom";

interface Props {
  name: string;
  image: string;
}

const Avatar = ({image, name}: Props) => {
    return (
        <div className="flex items-center space-x-4">
            <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover"/>
            <NavLink to="/" className="text-white text-2xl font-semibold hover:text-green-400">
                {name}
            </NavLink>
        </div>
    );
};

export default Avatar;
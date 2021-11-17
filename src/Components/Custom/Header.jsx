// Libraries
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16 bg-blueMain">
      <h2 className="ml-10 text-2xl md:text-3xl text-white font-bold">
        Github API App
      </h2>
      <button
        className="mr-10 p-0.5 md:p-1 bg-gray hover:bg-blueSoft text-xl md:text-2xl text-blueMain hover:text-white font-medium
        rounded-lg transition duration-300"
      >
        <Link to="/">Home</Link>
      </button>
    </header>
  );
};

export default Header;

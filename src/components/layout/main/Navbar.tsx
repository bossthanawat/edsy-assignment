import { PATH_PAGE } from "@/router/path";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="py-6 px-[88px]">
        <NavLink to={PATH_PAGE.root}>
          <p className="text-3xl font-bold bg-gradient-to-r from-[#0E34A0] to-[rgba(39, 93, 248, 0.8)] bg-clip-text text-transparent">
            EDSY.
          </p>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;

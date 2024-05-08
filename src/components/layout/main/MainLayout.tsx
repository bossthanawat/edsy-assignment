import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-primary-600">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;

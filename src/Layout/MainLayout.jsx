import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="font-poppins container mx-auto mt-5">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

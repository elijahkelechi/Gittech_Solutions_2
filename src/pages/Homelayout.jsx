import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Homelayout = () => {
  return (
    <div>
      <NavBar />

      <section className=" bg-red-700">
        <Outlet />
      </section>
    </div>
  );
};

export default Homelayout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";   
const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32-px 2xl:px-64">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout
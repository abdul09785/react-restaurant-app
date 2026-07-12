import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default AppLayout;

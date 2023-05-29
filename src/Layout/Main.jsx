import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noNavFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noNavFooter || <Header></Header>}
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
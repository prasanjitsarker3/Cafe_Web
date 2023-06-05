import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUser, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin]=useAdmin(); 
    // const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content uppercase">
                    {/* <!-- Sidebar content here --> */}
                    {
                        isAdmin ? <>
                            <li><NavLink><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensilSpoon></FaUtensilSpoon>Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageitem"><FaWallet></FaWallet>ManageItems</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/alluser"><FaUser></FaUser>All User</NavLink></li>
                        </> : <>
                            <li><NavLink><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                        </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
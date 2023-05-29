import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    const options = <>
        <li className="uppercase"><Link to='/'>Home</Link></li>
        <li className="uppercase"><Link to='/menu'>Menu</Link></li>
        <li className="uppercase"><Link to='/Order/salad'>Order</Link></li>
        <li className="uppercase"><Link to="/secret">Our Shop</Link></li>
        {
            user ? <Link to='/register'> <button onClick={handleLogOut} className="btn btn-ghost">Logout</button></Link>
                : <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
        }
    </>
    return (
        <div>
            <div className="navbar fixed bg-opacity-30 z-10 bg-black md:text-white max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            {options}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Restaurant</a>
                </div>
                <div className="navbar-end hidden lg:flex me-0">
                    <ul className="menu menu-horizontal px-1">
                        {options}
                    </ul>
                </div>

                <div className="navbar-end ">

                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
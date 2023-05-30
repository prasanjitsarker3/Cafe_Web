import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [cart] = useCart();
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
        <li className="uppercase"><Link to="/">
            <button className="flex justify-center text-lg">
                <Link to='/dashboard/mycart'>
                    <FaShoppingCart />
                    <div className=" absolute top-0 ml-8 text-red-600 font-bold">{cart?.length || 0}</div>
                </Link>

            </button>
        </Link></li>
        {/* {
            user ? <Link to='/register'> <button onClick={handleLogOut} className="btn btn-ghost">Logout</button></Link>
                : <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
        } */}
    </>
    return (
        <div>
            <div className="navbar fixed bg-opacity-30 z-10 bg-black md:text-white max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white font-bold lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            {options}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white font-bold">Restaurant</a>
                </div>
                <div className="navbar-end hidden lg:flex me-0">
                    <ul className="menu menu-horizontal px-1">
                        {options}
                    </ul>
                </div>

                <div className="navbar-end text-white font-bold">
                    {
                        user ? <Link to='/register'> <button onClick={handleLogOut} className="btn btn-ghost">Logout</button></Link>
                            : <Link to='/login'><button className="btn btn-ghost">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
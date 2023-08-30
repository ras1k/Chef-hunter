import { Link, NavLink } from "react-router-dom";
import logo from '/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li>
            <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/blog'}>Blog</NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>About Us</NavLink>
        </li>
    </>
    return (
        <div className="">
            <div className="navbar flex items-center bg-yellow-950 text-slate-200 p-3 rounded-b-lg top-0 mb-12 lg:mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content flex flex-row mt-3 p-2 shadow bg-black text-slate-200 rounded-box w-72">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" ><img src={logo} className='lg:w-1/6 w-1/2 rounded-lg' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-slate-200 px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.displayName && (
                        <p>{user.displayName}</p>
                    )}
                    {user?.photoURL && (
                        <img className="w-12 h-12 mx-3 rounded-full" src={user.photoURL} alt="user profile" />
                    )}
                    {user?.displayName ? <>
                        <button className="btn btn-outline hover:bg-white hover:text-black text-slate-200 btn-neutral" onClick={handleLogOut}>Logout</button>
                    </> :
                        <Link to='/login'><button className="btn btn-sm md:btn-md btn-outline hover:bg-white hover:text-black text-slate-200 btn-neutral">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
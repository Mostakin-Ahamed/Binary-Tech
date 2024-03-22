import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink className="mx-3 bg-white text-black" to='/'>Home</NavLink></li>


    </>

    return (
        <div className="bg-blue-900 items-center text-white h-24 mb-5">
            <div className="  lg:w-10/12 mx-auto border border-green-700">
                <div className="navbar ">
                    <div className="navbar-start border-2 border-black">
                        <div className=" dropdown border border-cyan-400 text-black">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-8 bg-base-100 shadow rounded-box w-60">
                                {
                                    navLinks
                                }
                                {
                                    user ? <></> : <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
                                }

                            </ul>
                        </div>
                        <div className="w-1/2  flex justify-center">
                            <Link to="/"><img className=" h-[75px] " src="../../../src/assets/Logo.png" alt="" /></Link>
                        </div>

                    </div>
                    <div className="navbar-center border border-red-800 hidden text-black lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </label>
                            }



                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <></> :
                                <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
                        }
                        {
                            // <h3 className="text-bold font-2xl mr-5">Username</h3>
                            user && <h3 className="text-bold font-2xl mr-5">{user.displayName}</h3>
                        }

                        {
                            user && <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <ul className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <Link to={'/dashboard/profile'}><li>
                                        <a>Dashboard</a>
                                    </li></Link>
                                    <li><button onClick={handleSignOut}> Log Out</button></li>
                                </ul>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

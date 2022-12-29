import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    // const { user, logOut } = useContext(AuthContext)
    let activeClass = {
        color: "blue",
        background: "none",
    };
    // log out
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(e => console.error(e))
    // }
    // nav items
    const menuItems = <React.Fragment>
        <div style={{display: "flex", gap: "30px"}}>
            <li>
                <NavLink to="/">Add Task</NavLink>
            </li>

            <li>
                <NavLink to="/my-task">My Task</NavLink>
            </li>
            <li>
                <NavLink
                    to="/completed-task
                ">Complete Task</NavLink>
            </li>
        </div>
    </React.Fragment>

    return (
        <header className='bg-white py-2'>

            <div className='max-w-[1480px] mx-auto flex justify-between items-center'>
                {/* LOGO */}
                <Link to='/'>
                    <div className='font-semibold text-2xl text-blue-500 border-2 border-green-500 rounded px-2 py-1 hover:bg-slate-900 hover:border-blue-600'>
                        <h2>Task App</h2>
                    </div>
                </Link>
                {/* nav items */}
                <div>

                    <ul className="flex justify-center items-center text-lg text-slate-600 font-semibold">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    {/* log out button */}
                    <button
                        // onClick={handleLogOut}
                        className='py-3 px-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md hover:shadow-slate-900'
                    >LOG OUT</button>
                    {
                        // user?.email && <div>
                        // <img className="rounded-full border-4 border-blue-500 ml-3" src={user?.photoURL} alt='' height='80' width='80' />
                        // </div>
                    }
                </div>
            </div>

            {/* <div className='w-14 text-blue-500 border-2 border-blue-500 rounded hover:border-cyan-500 hover:shadow-sm hover:shadow-slate-900'>
                <label className="text-blue-500 hover:text-cyan-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}
        </header >
    );
};

export default Header;
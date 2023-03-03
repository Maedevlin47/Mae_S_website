import 'tailwindcss/tailwind.css';
import { NavLink } from "react-router-dom";




function NavBar (){

        return (
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                    </a>
                    <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    </button>
                </div>


                <div className="lg:flex flex-grow items-center">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75" role = "button" exact to= "/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75" role = "button" exact to= "/projectcontainer">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75" role = "button" exact to= "/about">About</NavLink>
                        </li>
                        <li className="nav-item">
    
                            <NavLink className="px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75" role = "button" exact to= "/resume">Resume</NavLink>
                        </li>
                        <li className="nav-item">

                            <NavLink className="px-3 py-2 flex items-center text-m uppercase font-bold leading-snug text-white hover:opacity-75" role = "button" exact to= "/messageme">Message Me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            </nav>
        );
    }


export default NavBar;

// href="#pablo"
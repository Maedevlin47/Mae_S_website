import 'tailwindcss/tailwind.css';
import { NavLink } from "react-router-dom";




function NavBar (){

        return (
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-400 text-color">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"></div>
                <div className="lg:flex flex-grow items-center">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug hover:opacity-50" role = "button" exact to= "/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug hover:opacity-50" role = "button" exact to= "/projectcontainer">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug hover:opacity-50" role = "button" exact to= "/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug hover:opacity-50" role = "button" exact to= "/resume">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="px-3 py-2 flex items-center text-2xl uppercase font-bold leading-snug hover:opacity-50" role = "button" exact to= "/messageme">Message Me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            </nav>
        );
    }


export default NavBar;

// href="#pablo"
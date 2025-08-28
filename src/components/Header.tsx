import {Link, NavLink} from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import {useState} from "react";

function Header(){
    const[menuOpen, setMenuOpen]=useState(false);

    return(
        <header className="desktop">
            <div>
                <Link to="/"><h1>Kasa</h1></Link>
            </div>
            <div className="burger" onClick={()=>setMenuOpen(!menuOpen)}>
                <CiMenuBurger />
            </div>
            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                    <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
                    <li><NavLink to="/about">A propos</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;

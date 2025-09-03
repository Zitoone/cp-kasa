import { Link, NavLink } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci"
import { useState, useEffect } from "react"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
        const isBurger = event.target.classList.contains("burger")
        const isLink = event.target.closest(".navbar")
        if (menuOpen && !isBurger && !isLink) {
            setMenuOpen(false)
        }
        };

        const handleScroll = () => {
            if (menuOpen) setMenuOpen(false)
        };

        const handleResize = () => {
            if (menuOpen) setMenuOpen(false)
        };

        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)

        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleResize)
        };
    }, [menuOpen])

    const handleLinkClick = () => {
        setMenuOpen(false)
    };

    return (
        <header className="desktop">
            <div>
                <Link to="/"><h1>Kasa</h1></Link>
            </div>

            <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                <CiMenuBurger />
            </div>

            <nav className={`navbar ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><NavLink to="/" onClick={handleLinkClick}>Accueil</NavLink></li>
                    <li><NavLink to="/about" onClick={handleLinkClick}>A propos</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

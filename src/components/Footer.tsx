import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="footer-link">
                <div>
                    <h4>À propos de Kasa</h4>
                    <ul>
                        <li><Link to="/notre-histoire">Notre histoire</Link></li>
                        <li><Link to="/equipe">Équipe</Link></li>
                        <li><Link to="/carrieres">Carrières</Link></li>
                        <li><Link to="/presse">Presse</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/aide">Centre d'aide</Link></li>
                        <li><Link to="/contact">Nous contacter</Link></li>
                        <li><Link to="/probleme">Signaler un problème</Link></li>
                        <li><Link to="/404">Page 404</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Légal</h4>
                    <ul>
                        <li><Link to="/conditions">Conditions d'utilisation</Link></li>
                        <li><Link to="/confidentialite">Politique de confidentialité</Link></li>
                        <li><Link to="/mentions-legales">Mentions légales</Link></li>
                        <li><Link to="/cookies">Cookies</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>© 2024 Kasa. Tous droits réservés.</p>
        </footer>
    )
}
export default Footer;

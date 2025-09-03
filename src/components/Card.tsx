import {Link} from 'react-router-dom'
import { MdOutlinePlace } from "react-icons/md";
import Rating from './Rating'

/**
 * Props pour le composant AccomodationCard
 * @property {string} id - identifiant unique de l'hébergement
 * @property {string} title - titre de l'hébergement
 * @property {string} location - lieu de l'hébergement
 * @property {string[]} pictures -  Liste de photos de l'hébergement
 * @property {string[]} tags - Liste des tags de l'hébergement
 * @property {string} rating - Note de l'hébergement
 */
type AccomodationCardProps = {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  rating: string;
};

/**
 * Fonction du composant qui retourne les informations de l'hébergement passées en propriétés 
 * @function AccomodationCard
 * @param {string} id - identifiant unique de l'hébergement
 * @param {string} title - titre de l'hébergement
 * @param {string} location - lieu de l'hébergement
 * @param {string[]} pictures - Liste de photos de l'hébergement
 * @param {string[]} tags - Liste des tags de l'hébergement
 * @param {string} rating - Note de l'hébergement
 * @returns {JSX.Element}
 */
const AccomodationCard: React.FC<AccomodationCardProps>=({id,title, location, pictures, tags, rating})=>(
    <Link to={`/detail/${id}` }>
        <article>
            <div>
                <img src={pictures[0]} alt={title} />          
            </div>
            
            <div className='card-content'>
                <h3>{title}</h3>
                <p><MdOutlinePlace />{location}</p>
                <div className='tags'>
                    {tags.map((tag, index)=>(
                        <span key={index}>
                            {tag}
                        </span>
                    ))}
                </div>
                <Rating rating={rating} />
            </div>            
        </article>
    </Link>
)
export default AccomodationCard
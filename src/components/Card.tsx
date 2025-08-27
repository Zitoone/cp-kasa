import {Link} from 'react-router-dom'
import { MdOutlinePlace } from "react-icons/md";
import Rating from './Rating'

type AccomodationCardProps = {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  rating: string;
};

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
import { Link, useParams } from "react-router-dom"
import data from '../data/logements.json'
import Carousel from "../components/Carousel"
/* import AccomodationCard from "../components/Card" */
import { MdOutlinePlace } from "react-icons/md";

type Accomodation = {
  id: string;
  title: string;
  location: string;
  pictures: string[];
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  description: string;
  equipments: string[];
}

const Detail = () => {
  const { id } = useParams<{ id: string }>()

  const accomodation = data.find((item: Accomodation)=>item.id === id)

    if(!accomodation){
    return <Link to="*" />
    }
return(
    <main className="detail">
    <div>
        <div className="pics">
            <Carousel pictures={accomodation.pictures} />
        </div>
        <div>
            <h3>{accomodation.title}</h3>
            <p><MdOutlinePlace />{accomodation.location}</p>
            <div className='tags'>
                {accomodation.tags.map((tag, index)=>(
                    <span key={index}>
                        {tag}
                    </span>
                ))}
            </div>
            <div className="host">
                <img src={accomodation.host.picture} alt={accomodation.host.name} />
                {accomodation.host.name}
            </div>
        </div>

    </div>
    </main>
)
}

export default Detail;

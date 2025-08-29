import { Navigate, useParams } from "react-router-dom"
import data from '../data/logements.json'
import Carousel from "../components/Carousel"
import { MdOutlinePlace } from "react-icons/md";
import Collapse from "../components/Collapse";
import {FaWifi, FaUtensils, FaCar, FaTv, FaDog, FaSnowflake,
FaBath, FaTree, FaFire, FaToilet, FaCoffee, FaBlender, FaChild, FaHotTub,FaLightbulb } from "react-icons/fa";
import { LuWashingMachine, LuHeater } from "react-icons/lu";
import { FaElevator } from "react-icons/fa6";
import Equipments from '../components/Equipment'

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
        return <Navigate to="notFound" />
    }

    function getIcon(eq: string) {
        switch(eq) {
            case "Wifi": return <FaWifi />
            case "Télévision": return <FaTv />
            case "Climatisation": return <FaSnowflake />
            case "Cuisine": return <FaUtensils />
            case "Parking": return <FaCar />
            case "Animaux": return <FaDog />
            case "Machine à laver": return <LuWashingMachine />
            case "Jardin": return <FaTree />
            case "Barbecue": return <FaFire />
            case "Cheminée": return <FaFire />
            case "Toilettes sèches": return <FaToilet />
            case "Poêle à bois": return <FaFire />
            case "Eau chaude": return <FaFire />
            case "Machine à café": return <FaCoffee />
            case "Lave-vaisselle": return <FaBlender />
            case "Kitchenette": return <FaUtensils />
            case "Sauna": return <FaHotTub />
            case "Cuisine moderne": return <FaUtensils />
            case "Ascenseur": return <FaElevator />
            case "Jeux enfants": return <FaChild />
            case "Terrasse": return <FaTree /> 
            case "Baignoire": return <FaBath />
            case "Electricité": return <FaLightbulb />
            case "Cuisine équipée": return <FaUtensils />
            case "Chauffage": return <LuHeater />
            default: return "❓";
        }
    }

return(
    <main className="detail">
    <div>
        <div className="pics">
            <Carousel pictures={accomodation.pictures} />
        </div>
        <div className="main-info">
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
        <div className="description">
            <Collapse title="Description">
            <p>{accomodation.description}</p>  
            </Collapse>               
        </div>
        <div className="equipments">
            <Collapse title="Equipements">
            <ul>
                {accomodation.equipments.map((eq, index)=>(
                    <Equipments key={index} name={eq} icon={getIcon(eq)}/>
                ))}
            </ul>
            </Collapse>
        </div>

                
    </div>
    </main>
)
}

export default Detail;

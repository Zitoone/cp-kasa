import { useEffect, useState } from "react"
import AccomodationCard from "../components/Card"
import data from '../data/logements.json'

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

const Home=()=>{
    const [accomodations, setAccomodations]=useState<Accomodation[]>([])
    useEffect(()=>{
        setAccomodations(data as Accomodation[])
    }, [])
    return(
        <main>
            <div className="title">
                <h2>Trouvez votre logement idéal</h2>
                <p>Découvrez des hébergements uniques et vivez comme un local
partout dans le monde</p>
            </div>
            <div className='accomodation-card'>
                {accomodations.map((accomodation)=>(
                    <AccomodationCard
                        key={accomodation.id}
                        id={accomodation.id}
                        title={accomodation.title}
                        location={accomodation.location}
                        pictures={accomodation.pictures}
                        tags={accomodation.tags}
                        rating={accomodation.rating} />
                ))}
            </div>
        </main>
    )
}
export default Home
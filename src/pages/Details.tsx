import { useParams } from "react-router-dom"

const Detail = () => {
  const { id } = useParams<{ id: string }>()
  return <div>Détails du logement {id}</div>
}

export default Detail



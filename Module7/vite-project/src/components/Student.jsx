import { Link } from "react-router-dom"

function Student({id, name, location, set = 'set1'}) { //destructure the props object into variables, and optionally set default values

    return (
        <li className="Student"><img src={`https://robohash.org/${name}?size=50x50&set=${set}`} alt={name}/> 
        <span className="details"><Link to={"/students/"+id}><strong>{name}</strong></Link>, based in {location}</span></li> 
    )
}

export default Student
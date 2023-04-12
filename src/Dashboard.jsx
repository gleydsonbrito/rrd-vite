import { Link, useParams } from "react-router-dom";

export default function Dashboard(){
    const { name } = useParams()
    return(
        <div>
            <h1>Dashboard</h1>
            <h2>Usuário: {name}</h2>
            <Link to="/" >Home</Link>
            <br/>
            <Link to="/contact">Contatos</Link>
        </div>
    );
}
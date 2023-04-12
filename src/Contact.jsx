import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <div>
            <h1>Contact</h1>
            <Link to="/dashboard" >Dashboard</Link>
            <br/>
            <Link to="/about">About</Link>
        </div>
    );
}
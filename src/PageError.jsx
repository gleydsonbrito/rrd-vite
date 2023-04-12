import { Link } from "react-router-dom";

export default function PageError(){
    return(
        <div>
            <h1>Error 404</h1>
            <Link to="/" >Home</Link>
        </div>
    );
}
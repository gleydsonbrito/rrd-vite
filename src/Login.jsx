import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [name, setName] = useState('')

    const navigate = useNavigate()

    function hadleNavigate(){
        navigate(`/dashboard/${name}`)
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Login" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="Password" />
            <button 
            onClick={hadleNavigate}
            disabled={name == '' ? true : false}
            >Login</button>
        </div>
    );
}
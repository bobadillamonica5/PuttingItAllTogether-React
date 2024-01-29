import { Link } from "react-router-dom";
import App from "../App";

function NavBar(){
    return (
        <div>
            <Link to='/'> Home</Link>
            <br />
            <Link to='/newplayer'> New Player</Link>
        </div>
    )
}

export default NavBar;
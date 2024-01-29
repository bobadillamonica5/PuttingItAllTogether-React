
import { useState, useEffect } from "react";
import fetchPlayers from '../API/index'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function AllPlayers(){

    const [players, setPlayers] = useState([]);

// fetches data in order to render puppies on page

    useEffect(()=>{
        const fetchData = async () => {
            try {
                console.log('fetching data...')
                const data = await fetchPlayers();
                const playersArr = data.data.players;
                console.log('updating state...')
                setPlayers(playersArr);
                
            } catch (error) {
            }
        }
        if (players.length === 0) {
            fetchData();
        }

    },[])

    const navigate = useNavigate();

    return (
        <div>
            {players.map((player) => (
                        <div key={player.id}>
                            Name: {player.name}
                            <br></br>
                            <Link to={`/players/${player.id}`}>
                                <button>See Details</button>
                            </Link>                       
                        </div>

            ))}
        </div>
    )
}

export default AllPlayers;
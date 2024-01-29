import { useState, useEffect } from "react";
import fetchPlayers from '../API/index';
import { useParams } from "react-router-dom";

function SinglePlayer() {
    const { id } = useParams();
    const [selectedPlayer, selectPlayer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPlayers();
                console.log('Fetched data:', data);
                const playersArr = data.data.players;
                const player = playersArr.find((player) => player.id === id);
                selectPlayer(player);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call fetchData after component mounts

    }, [id]);

    useEffect(() => {
        // Use selectedPlayer directly, not logging immediately after calling selectPlayer
        console.log('Selected Player:', selectedPlayer);
    }, [selectedPlayer]);

    return (
        <div>
            <div>
                {/* Render details based on selectedPlayer */}
                {selectedPlayer ? (
                    <>
                        <h2>Name: {selectedPlayer.name}</h2>
                        {/* Render other details as needed */}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default SinglePlayer;

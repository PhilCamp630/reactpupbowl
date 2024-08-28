import { fetchAllPlayers, removePlayer } from "../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";





const AllPlayers = ({players , setPlayers, setPlayer}) => {
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");

    console.log(searchParam);

    useEffect(() => {
        async function getAllPlayers() {
            const APIResponse = await fetchAllPlayers();
            console.log(APIResponse.data.players);
            if (APIResponse.success) {
                setPlayers(APIResponse.data.players)
            } else{
                setError(APIResponse.error.message)
            }
        }
        getAllPlayers();
    }, [])

    const playersToDisplay = searchParam 
    ? players.filter((player) => player.name.toLowerCase().includes(searchParam))
    : players;

    return (
        <>
            <div>
                <label>
                    search: <input 
                    type ="text" 
                    placeholder="search"
                    onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
                </label>
            </div>

            {playersToDisplay.map((player) =>{
                return (
                  <div key={player.id}>
                    <h3>{player.name}</h3>
                    <p>{player.breed}</p>
                    <p>{player.status}</p>
                    <img src={player.imageUrl} />
                    <br></br>
                    <button
                      onClick={() => {
                        setPlayer(player);
                        
                      }}
                    >
                      See Details
                    </button>
                    <button
                      onClick={async() => {
                        await removePlayer(player.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                );
                

            })}
        </>
    );
};

export default AllPlayers;
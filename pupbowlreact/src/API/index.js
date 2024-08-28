const COHORT = "2407-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    console.log(result);
    return result;
} catch (err) {
        console.error(err);   
    }
    
}

export async function addNewPlayer( name, breed, status, imageUrl) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`,
            {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                name, breed, status, imageUrl
            }),
        }
    );
    const result = await response.json();
    console.log(result);
    return result.data.newPlayer;
    } catch (err) {
    console.error(err);
    }
}

export async function removePlayer(playerId) {
try {
  const response = await fetch(
    `${API_URL}/players/${playerId}`,
    {
      method: "DELETE",
    }
  );
  const result = await response.json();
  console.log(result);
  console.log(playerId)
} catch (err) {
  console.log(err);
}
}
// create fetch

// ?delet fetch
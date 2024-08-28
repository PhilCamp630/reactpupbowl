import { useState } from "react";
import { addNewPlayer } from "../API";


// CREATE A CREATE NEW PLAYER BUTTON
// export default function NewPlayerForm({token, setToken}){
//     const [ name, setName ] = useState("");
//     const [ breed, setBreed ] = useState("")
//     const [ status, setStatus ] = useState("");
//     const [ imageUrl, setimageURL] = useState("")
// } 

export default function NewPlayerForm({players , setPlayers}) {
    const [ name, setName ] = useState("");
    const [ breed, setBreed ] = useState("")
    const [ status, setStatus ] = useState("");
    const [ imageUrl, setimageUrl] = useState("")
    // try {
    //   const response = await fetch(
    //     "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/signup",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ name, breed, status, imageUrl }),
    //     });
    //     const result = await response.json();
    //     setToken(result.token)
    //     console.log(result);
    //     } catch (err) {
    //         console.error(err);
    //     }
    async function handleSubmit(e) {
        e.preventDefault()
        const newPlayer = await addNewPlayer(name, breed, status, imageUrl);
        setPlayers([...players, newPlayer ])

        console.log("submit")
    }
    return (
      <>
        <h2>New Player</h2>
        <form onSubmit={(e) => handleSubmit(e)} >

        <label>
          Name:{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Breed:
          <input
            type="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </label>
        <label>
          Status:
          <input
            type="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </label>
        <label>
          ImageURL:
          <input
            type="imageURL"
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
          />
        </label>
        <button>Submit</button>
        </form>
      </>
    );
}



// const addNewPlayer = async (playerObj) => {

//   try {
//     const response = await fetch(`${API_URL}/players`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(playerObj),
//     });
//     const json = await response.json();
//     return json.data;
//   } catch (err) {
//     console.error("Oops, something went wrong with adding that player!", err);
//   }


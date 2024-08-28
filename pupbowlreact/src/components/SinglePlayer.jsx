export default function SinglePlayer(player) {
  return (
    <>
      <div>
        <h3>{player.name}</h3>
        <h3>{player.breed}</h3>
        <h3>{player.status}</h3>
        <h3>{player.imageUrl}</h3>
      </div>
    </>
  );
}


// CLICK SEE DETAILS BUTTON WITH REACT

// const renderAllPlayers = (playerList) => {
//   console.log(playerList);
//   const main = document.querySelector("main");
//   main.innerHTML = "";

//   if (playerList.length === 0) {
//     main.innerHTML = `<div>No players were present</div>`;
//     return;
//   }

//   const container = document.createElement("div");
//   container.classList.add("card-container");

//   playerList.forEach((player) => {
//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//       <h3>${player.name}</h3>
//       <p>ID: ${player.id}</p>
//       <p>Breed: ${player.breed}</p>
//       <p>Status: ${player.status}</p>
//       <img src="${player.imageUrl}" alt="${player.name}" />
//     `;

//     const detailsButton = document.createElement("button");
//     detailsButton.textContent = "See Details";
//     detailsButton.addEventListener("click", () => renderSinglePlayer(player));

//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.addEventListener("click", async () => {
//       await removePlayer(player.id);
//       const players = await fetchAllPlayers();
//       renderAllPlayers(players);
//     });

//     card.appendChild(detailsButton);
//     card.appendChild(removeButton);
//     container.appendChild(card);
//   });

//   main.appendChild(container);
// };
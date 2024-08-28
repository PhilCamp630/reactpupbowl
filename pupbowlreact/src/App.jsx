import { useState } from 'react'
import './App.css'
import { Link, Route, Routes} from "react-router-dom";
import AllPlayers from "./components/AllPlayers"
import NewPlayerForm from './components/NewPlayerForm';

export default function App() {
  const [player, setPlayer] = useState([]);
  const [players, setPlayers] = useState([])

  return (
    <>
      <h1>Puppy Bowl</h1>
      <NewPlayerForm players = {players} setPlayers = {setPlayers}/>
      <AllPlayers players = {players} setPlayers = {setPlayers} setPlayer={setPlayer}/>
    </>
  );
}




// <Link to='someURL'>To Home</Link>  b 
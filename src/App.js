import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Movies } from './components/Movies';
import { Boards } from './components/Boards';
import Entryform from './components/Entryform';
import { Newform } from './components/Newform'; 
import { Welcome } from './components/Welcome';

function App() {

  const [movies, setMovies] = useState([]);

  const [boards, setBoards] = useState([]);

  const [boardData, setBoardData] = useState([]);

  const [game, setGame] = useState([]);

  /*
  useEffect(() => {
    fetch('/gameState').then(response =>
      response.json().then(data => {
        console.log(data);
        setBoards(data)
      })
    );
  }, []);
  */

  
  useEffect(() => {
    const fetched = fetch('https://lichess.org/api/account/playing', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer G7zp9tVJrGSo6I1z',
      }
    });
    fetched.then(response => 
      response.json().then(data => {
        console.log('app.js fetch')
        console.log(data['nowPlaying'][0])
        setBoardData(data['nowPlaying'])
        setBoards(data['nowPlaying'][0]['fen'])
        setGame(data['nowPlaying'][0]['gameId'])
      })
    );
  }, []);
  

  return (
    <div className="App">
      <Welcome name="Fred" />
      <Boards boards={boards} />
      <Entryform game={game}/>


    </div>
  );
}

export default App;

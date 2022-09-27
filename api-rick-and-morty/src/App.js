import './styles.js';
import {  useEffect, useState } from "react"
import { Titulo, Card, Ul } from "./styles"

function App() {

  const [characterList, setCharacterList] = useState([])
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((res) => setCharacterList(res.results))
    .catch(err => console.log(err))
  }, [])

  console.log(characterList);

  return (
    <div className="App">
        <Titulo>Meus personagens</Titulo>
      <Ul>
        {characterList.map((character) => (
            <Card key={character.id} style={{backgroundColor: character.status == "Alive" ? "#88cc88" : "#D3696C"}}> 
              <h2>{character.name}</h2>
              <img src={character.image} alt="imagens dos personagens da série rick and morty"></img>
            </Card>
        ))}
        </Ul>
    </div>
  );
}

export default App;

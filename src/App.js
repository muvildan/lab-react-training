import React from 'react';
// import IdCard from "./components/IdCard"
import BoxColor from "./components/BoxColor"
import Random from "./components/Random";
import CardsList from "./components/CardsList";
import Greetings from "./components/Greetings";

import './App.css';

function App() {
  return (

  <div className="App">
    <h1 className="title">IdCard</h1>
    <CardsList />

    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

    <h1>Random</h1>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <h1>Box Color</h1>
    <BoxColor min={0} max={255}/>
    <BoxColor min={0} max={255}/>

  </div>
  );
}

export default App;

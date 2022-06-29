import './App.css';
import playerslist from './source.json'
import Card from './Card'



function App() {
    const sorted = playerslist["players"].sort((a,b) => b.wins - a.wins);
    const cards= sorted.map(item => <Card
        key={item.name}
        name={item.name}
        wins={item.wins}
        loses={item.loses} />)
  return (
    <main>
        <h1>Balls of Fury</h1>
        <h2>June championship</h2>
        {cards}
    </main>
  );
}

export default App;

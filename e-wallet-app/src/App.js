import './App.css';
import { Header } from './Components/Header';
import { Card } from './Components/Card';
import { AddCard } from './Components/AddCard';




function App() {
  return (
    <div className="app">
      <Header  />
      <Card />
      <AddCard />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting='Bienvenido'/>
    </div>
  );
}

export default App;

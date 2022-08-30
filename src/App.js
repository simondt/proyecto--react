import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ItemListContainer greeting='Bienvenido'></ItemListContainer>
    </div>
  );
}

export default App;

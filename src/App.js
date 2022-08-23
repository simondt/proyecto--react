import logo from './logo.svg';
import './App.css';
import Nav from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ItemListContainer greeting='Bienvenido'></ItemListContainer>
    </div>
  );
}

export default App;

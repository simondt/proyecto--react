import './App.css';
import Nav from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {Error404} from './components/ErrorPages/Error404'
import {Cart} from './components/Cart/Cart'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido'/>} /> {/* ruta a home */}
          <Route path='/category/:id' element={<ItemListContainer/>} /> 
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { CartProvider } from './contexts/CartContext';
import Cart from './pages/Cart';
import Produtcs from './pages/Products';
import { IconName } from "react-icons/";

function App() {
  return (
    <CartProvider>  
      <Router>
          <div className="App">
            <div className="Header">
              <NavBar />
              <Route path="/" exact component={Produtcs}></Route>
              <Route path="/Cart" component={Cart}></Route>
            </div>
          </div>
      </Router>
    </CartProvider>
  );
}

export default App;

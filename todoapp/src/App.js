import logo from './logo.svg';
import './App.css';
import { TodoProvider } from './contexts/TodoContext'
import Home from './components/Home'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import AddPage from './components/AddPage'

function App() {
  return (
    <TodoProvider>
      <Router>
        <div className="App">
          <div className='App-header'>
            <h1><span className='Title__Todo'>TODO</span><span className='Title__List'>List</span></h1>
            <Route exact  path = "/" component = {Home} />
            <Route exact  path='/addpage/:id?' component = {AddPage} />
          </div>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;

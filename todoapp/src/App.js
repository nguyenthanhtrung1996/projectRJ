import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddPage from './components/AddPage';
import Home from './components/Home';
import { TodoProvider } from './contexts/TodoContext';

function App() {

  useEffect(() => {
    document.title = "ToDoList";
  }, [])
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

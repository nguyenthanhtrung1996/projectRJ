import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from '../components/HomeScreen';
import { TodoContext } from '../context/todo';

Homepage.propTypes = {
    
};

function Homepage(props) {
    const [ todoList, AddTodo, getTimeCurrent, removeTodo, toDoEveryday ] = useContext(TodoContext);

    console.log('HomePage re-render', toDoEveryday);
    return (
        <HomeScreen 
            todoList={todoList}
            getTimeCurrent={getTimeCurrent}
            removeTodo={removeTodo}
            toDoEveryday={toDoEveryday}
        />
    );
}

export default Homepage;
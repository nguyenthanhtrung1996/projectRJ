import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import HomeScreen from '../components/HomeScreen';
import { TodoContext } from '../context/todo';

Homepage.propTypes = {
    
};

function Homepage(props) {
    const [ todoList, AddTodo, getTimeCurrent ] = useContext(TodoContext);

    console.log('HomePage re-render');
    return (
        <HomeScreen 
            todoList={todoList}
            getTimeCurrent={getTimeCurrent}
        />
    );
}

export default Homepage;
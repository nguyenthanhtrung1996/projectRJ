import React, { useContext } from 'react';
import AddWorkScreen from '../components/AddWorkScreen';
import { TodoContext } from '../context/todo';

AddWorkPage.propTypes = {
    
};

function AddWorkPage(props) {
    const [ todoList, AddTodo, getTimeCurrent ] = useContext(TodoContext);

    console.log('AddWorkPage re-render');
    return (
        <AddWorkScreen 
            AddTodo={AddTodo}
            getTimeCurrent={getTimeCurrent}
        />
    );
}

export default AddWorkPage;
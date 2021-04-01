import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoContext = React.createContext();

export function TodoProvider(props) {
    const [ todoList, setTodoList ] = useState([]);

    function addTodo(obj){
        console.log('f(): addTodo',obj)
        const newTodo = [...todoList];
        newTodo[obj.id] = obj;
        setTodoList(newTodo);
    }

    function handleOnChangeActive(item){
        const newTodo = [...todoList];
        const index = newTodo.indexOf(item);
        newTodo[index].isCompleted = !newTodo[index].isCompleted;
        setTodoList(newTodo);
    }

    function deleteItem(item){
        const newTodo = [...todoList];
        const index = newTodo.indexOf(item);
        newTodo.splice(index,1);
        setTodoList(newTodo);
    }

    return (
        <TodoContext.Provider
            value={{
                todoList,
                addTodo,
                handleOnChangeActive,
                deleteItem
            }}
        >
        {props.children}
        </TodoContext.Provider>
    );
}


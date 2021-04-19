import React, { useEffect, useState } from 'react';

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {
        const checkTime = setInterval(() => {
            todoList.forEach((todo,index) => {
                if(todo.time < getTimeCurrent()){
                    removeTodo(index);
                }
            });
            console.log(todoList)
        }, 5000)
        return () => {
            clearInterval(checkTime);
        }
    }, [todoList]);

    function checkAdult(todo) {
        console.log( JSON.stringify(todoList) );
        return todo.minutes >= 10;
      }

    // useEffect(() => {
    //     const formatTime = setInterval(() => {
    //         const newList = [...todoList];
    //         newList.forEach(todo => {
    //             todo.minutes = Math.floor((todo.time - getTimeCurrent())/60000)
    //         })
            
    //         console.log(newList.every(checkAdult) , JSON.stringify(newList) );
    //         // console.log( JSON.stringify(todoList) );
    //         // setTodoList(newList);
    //     }, 5000)
    //     return () => {
    //         clearInterval(formatTime);
    //     }
    // }, [todoList])

    const AddTodo = (obj) => {
        const newList = [...todoList];
        obj.time = getTimeCurrent() + parseInt(obj.time) * 60000;
        console.log(parseInt(obj.time) * 60000)
        newList.push(obj);
        setTodoList(newList);
    }

    const removeTodo = (index) => {
        const newList = [...todoList];
        newList.splice(index,1);
        setTodoList(newList);
    }

    const getTimeCurrent = () => {
        const d= new Date();
        return d.getTime();
    }

    return (
        <TodoContext.Provider
        value={[
            todoList,
            AddTodo,
            getTimeCurrent
        ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
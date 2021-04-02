import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const TodoContext = React.createContext();

export function TodoProvider(props) {
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("todoList")){
            var todo = JSON.parse(localStorage.getItem("todoList"));
            setTodoList(todo);
        }
    }, []); 

    useEffect(() => {
        var check;
        if(todoList.length > 0){
            check = setInterval(() => {
                const newtodo = [...todoList];
                for (const todo of newtodo) {
                    if(todo.time == getTime() && todo.isCompleted == false){
                        // alert(todo.textTitle);
                        todo.isCompleted = true;
                        notify(todo);
                    }
                }
                setData(newtodo);
            }, 3000);
        }
        return () => {
            clearInterval(check)
        }
    }, [todoList]);

    const notify = (obj)=>{ 
        toast.success(`Success: ${obj.textTitle}`, {autoClose:10000})
    }

    function getTime(){
        function addZero(i) {
            if (i < 10) {
              i = "0" + i;
            }
            return i;
        }
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        return `${h}:${m}`;
    }
    

    
    function setData(obj) {
        localStorage.setItem("todoList", JSON.stringify(obj));
        setTodoList(obj);
    }

    function addTodo(obj){
        const newTodo = [...todoList];
        newTodo[obj.id] = obj;
        setData(newTodo);
    }

    function handleOnChangeActive(item){
        const newTodo = [...todoList];
        const index = newTodo.indexOf(item);
        newTodo[index].isCompleted = !newTodo[index].isCompleted;
        setData(newTodo);
    }

    function deleteItem(item){
        const newTodo = [...todoList];
        const index = newTodo.indexOf(item);
        newTodo.splice(index,1);
        setData(newTodo);
    }

    return (
        <TodoContext.Provider
            value={{
                todoList,
                addTodo,
                handleOnChangeActive,
                deleteItem,
                getTime
            }}
        >
        {props.children}
        </TodoContext.Provider>
    );
}


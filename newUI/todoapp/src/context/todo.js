import React, { useEffect, useState } from 'react';

export const TodoContext = React.createContext();

export function TodoProvider(props){
    const [ todoList, setTodoList ] = useState([]);

    const [ toDoEveryday, setTodoEveryday ] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('todoList') != null){
            setTodoList(JSON.parse(localStorage.getItem('todoList')));
        }
        return () => {
            localStorage.setItem('todoList', JSON.stringify(todoList));
        }
    }, [])

    useEffect(() => {
        if(todoList.length == 0) return;
        const checkTime = setInterval(() => {
            todoList.forEach((todo,index) => {
                if(todo.time < getTimeCurrent()){
                    removeTodo(todo,index);
                }
            });
        }, 5000)
        return () => {
            clearInterval(checkTime);
        }
    }, [todoList]);


    useEffect(() => {
        const formatTime = setInterval(() => {
            const newList = [];
            todoList.forEach(todo => {
                newList.push({...todo});
            })
            newList.forEach(todo => {
                todo.minutes = Math.floor((todo.time - getTimeCurrent())/60000)
            })
            console.log(JSON.stringify(newList) != JSON.stringify(todoList))
            if(JSON.stringify(newList) != JSON.stringify(todoList)){
                
                setTodoList(newList);
            }
        }, 1000)
        return () => {
            clearInterval(formatTime);
        }
    }, [todoList])

    useEffect(() => {
        const mostTime = setInterval(()=> {
            const d = new Date();
            const timeBreakfast = new Date(d.getFullYear(),d.getMonth(),d.getDate(),6);
            const timeLunch = new Date(d.getFullYear(),d.getMonth(),d.getDate(),12);
            const timeDinner = new Date(d.getFullYear(),d.getMonth(),d.getDate(),18,2);
            if(d.getTime() > timeBreakfast.getTime()){
                const date = timeBreakfast.getDate()+1;
                timeBreakfast.setDate(date);
            }
            if(d.getTime() > timeLunch.getTime()){
                const date = timeLunch.getDate()+1;
                timeLunch.setDate(date);
            }
            if(d.getTime() > timeDinner.getTime()){
                const date = timeDinner.getDate()+1;
                timeDinner.setDate(date);
            }
            const getTimeBreakFast = Math.ceil((timeBreakfast.getTime()-d.getTime())/60000);
            const getTimeLunch = Math.ceil((timeLunch.getTime()-d.getTime())/60000);
            const getTimeDinner = Math.ceil((timeDinner.getTime()-d.getTime())/60000);
            const newTodoEveryday = [getTimeBreakFast,getTimeLunch,getTimeDinner];
            // if(getTimeBreakFast == 1440 ){
            //     alert('Breakfast');
            // } else if (getTimeLunch == 1440){
            //     alert('Lunch');
            // } else if (getTimeDinner == 1440){
            //     alert('Dinner');
            // }
            if(JSON.stringify(toDoEveryday) != JSON.stringify(newTodoEveryday)){
                setTodoEveryday(newTodoEveryday);
            }
        },1000)
        return () => {
            clearInterval(mostTime)
        }
    }, [toDoEveryday])

    const getMostusedTime = () => {
        const d = new Date();
        const timeBreakfast = new Date(d.getFullYear(),d.getMonth(),d.getDate(),6);
        const timeLunch = new Date(d.getFullYear(),d.getMonth(),d.getDate(),12);
        const timeDinner = new Date(d.getFullYear(),d.getMonth(),d.getDate(),18);
        if(d.getTime() > timeBreakfast.getTime()){
            const date = timeBreakfast.getDate()+1;
            timeBreakfast.setDate(date);
        }
        if(d.getTime() > timeLunch.getTime()){
            const date = timeLunch.getDate()+1;
            timeLunch.setDate(date);
        }
        if(d.getTime() > timeDinner.getTime()){
            const date = timeDinner.getDate()+1;
            timeDinner.setDate(date);
        }
        if(toDoEveryday.length == 0) {
            const getTimeBreakFast = Math.ceil((timeBreakfast.getTime()-d.getTime())/60000);
            const getTimeLunch = Math.ceil((timeLunch.getTime()-d.getTime())/60000);
            const getTimeDinner = Math.ceil((timeDinner.getTime()-d.getTime())/60000);
            const newTodoEveryday = [getTimeBreakFast,getTimeLunch,getTimeDinner];
            setTodoEveryday(newTodoEveryday);
        }
        // const newTodoEveryday = [getTimeBreakFast,getTimeLunch,getTimeDinner];

        // console.log(JSON.stringify(toDoEveryday),JSON.stringify(newTodoEveryday))

        // if(JSON.stringify(toDoEveryday) != JSON.stringify(newTodoEveryday)){
        // setTodoEveryday([getTimeBreakFast,getTimeLunch,getTimeDinner]);
        // }
    }

    const formatTime = (newList) => {
        newList.forEach(todo => {
            todo.minutes = Math.floor((todo.time - getTimeCurrent())/60000)
        })
        setTodoList(newList);
    }

    const AddTodo = (obj) => {
        const newList = [...todoList];
        if( obj.time < 61 ) obj.time = getTimeCurrent() + parseInt(obj.time) * 60000;
        // obj.time = getTimeCurrent() + parseInt(obj.time) * 60000;
        newList.push(obj);
        formatTime(newList);
        localStorage.setItem('todoList', JSON.stringify(newList))
    }

    const removeTodo = (todo,index) => {
        const newList = [...todoList];
        newList.splice(index,1);
        setTodoList(newList);
        alert(todo.title);
        localStorage.setItem('todoList', JSON.stringify(newList))
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
            getTimeCurrent,
            removeTodo,
            toDoEveryday
        ]}
        >
            {props.children}
        </TodoContext.Provider>
    )
}
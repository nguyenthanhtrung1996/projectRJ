import React, { useContext, useEffect, useState } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext'
import './styles/AddPage.css'

function AddPage(props) {
    const { todoList, addTodo } = useContext(TodoContext);

    const [ textTitle, setTextTitle ] = useState('');
    const [ textNote, setTextNote ] = useState('');
    console.log(props.match.params);

    useEffect(() => {
        if(props.match.params.id !==undefined){
            const todo = todoList[parseInt(props.match.params.id)];
            // console.log(todoList[parseInt(props.match.params.id)]);
            setTextTitle(todo.textTitle);
            setTextNote(todo.textNote);
        }
    }, [])

    return (
        <div>
            <div className="Add__box__content">
                <input 
                    className='Add__Title'
                    type='text' 
                    placeholder='Title' 
                    value={textTitle}
                    onChange={(e) => {
                        setTextTitle(e.target.value);
                    }}
                />
                <div>
                    <textarea 
                        onChange={(e) => {
                            setTextNote(e.target.value);
                        }}
                        className='Add__Note'
                        rows="5" 
                        cols="40"
                        placeholder='Note...'
                        value={textNote}
                    >
                    </textarea>
                </div>
                
                
            </div>
            <div className='Box__button'>
                <Link 
                        to='/' 
                        onClick={() => {
                            if(props.match.params.id !==undefined){
                                const newObj = {
                                    id: parseInt(props.match.params.id),
                                    textTitle,
                                    textNote,
                                    isCompleted: todoList[parseInt(props.match.params.id)].isCompleted
                                }
                                // console.log(`obj: ${todoList[parseInt(props.match.params.id)].isCompleted}`)
                                addTodo(newObj);
                            } else {
                                const newObj = {
                                    id: todoList.length == 0 ? 0 : parseInt(todoList[todoList.length-1].id) + 1,
                                    textTitle,
                                    textNote,
                                    isCompleted: false
                                }
                                console.log(`obj: ${newObj}`)
                                addTodo(newObj);
                            }
                            
                            // console.log(`obj: ${newObj}`)
                            // addTodo(newObj);
                        }}
                        className='Button'
                    >
                        Add
                </Link>
                <Link 
                        to='/' 
                        className='Button'
                    >
                        Cancel
                </Link>
            </div>
            
        </div>
    );
}

export default AddPage;
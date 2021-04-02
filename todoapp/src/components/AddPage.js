import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext';
import './styles/AddPage.css';
import Switch from 'react-input-switch';
import Button from '@material-ui/core/Button';

function AddPage(props) {
    const { todoList, addTodo, getTime } = useContext(TodoContext);

    const [ textTitle, setTextTitle ] = useState('');
    const [ textNote, setTextNote ] = useState('');
    // const [ hours, setHours ] = useState();
    // const [ minute, setMinute ] = useState('00');

    const [ time, setTime ] = useState();
    const [value, setValue] = useState('no');

    useEffect(() => {
        if(props.match.params.id !==undefined){
            const todo = todoList[parseInt(props.match.params.id)];
            console.log(todoList[parseInt(props.match.params.id)]);
            setTextTitle(todo.textTitle);
            setTextNote(todo.textNote);
            if(todo.time == undefined){
                setTime(getHours());
                console.log(time);
            } else {
                setTime(todo.time);
                setValue('yes');
                console.log(time);
            }
        } else {
            console.log(getTime() + 5);
            setTime(getHours());
            console.log(time);
        }
        
    }, [])

    function getHours(){
        return parseInt(getTime()) + 1 + ':00';
    }

    function getData(){
        if(props.match.params.id !==undefined){
            const newObj = {
                id: parseInt(props.match.params.id),
                textTitle,
                textNote,
                time: value == 'yes' ? time : undefined,
                isCompleted: todoList[parseInt(props.match.params.id)].isCompleted
            }
            addTodo(newObj);
        } else {
            const newObj = {
                id: todoList.length == 0 ? 0 : parseInt(todoList[todoList.length-1].id) + 1,
                textTitle,
                textNote,
                time: value == 'yes' ? time : undefined,
                isCompleted: false
            }
            // console.log(`obj: ${newObj}`)
            addTodo(newObj);
        }
    }
      

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
                <div className='Reminder__box'>
                    <span>Reminder</span>
                    <Switch on="yes" off="no" value={value} onChange={setValue} />
                </div>
                <div className='Oclock__box'>
                        {
                            value == 'yes' ? 
                            <input 
                                type="time" 
                                value={time} 
                                onChange={(e) => {
                                    setTime(e.target.value);
                                }}
                                className='Oclock'
                            />
                            : 
                            <div style={{display: 'none'}}></div>
                        }
                </div>
                
            </div>
            <div className='Box__button'>
                <Link 
                        to='/' 
                        onClick={() => {
                            getData();
                        }}
                        className='Button'
                    >
                        <Button variant="contained">Add</Button>
                </Link>
                <Link 
                        to='/' 
                        className='Button'
                >
                        <Button variant="contained">Cancel</Button>
                </Link>
                
            </div>
            
        </div>
    );
}

export default AddPage;
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsFillPlusCircleFill, BsX, BsCircle,BsCircleFill } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { TodoContext } from '../contexts/TodoContext'
import './styles/Home.css'

function Home(props) {
    const { todoList, handleOnChangeActive, deleteItem } = useContext(TodoContext);
    // console.log(todoList);

    return (
        <div className='Home__Box'>
            <div className='Home__Box__content'>
                {todoList.length == 0 ? 
                    <div>
                        <p className='Home__Title__nothing'>Nothing...</p>
                    </div> 
                    :
                    todoList.map((todo) => {
                        if(todo.isCompleted){
                            return (
                                <div className='Home__Box__Title'>
                                    <span>
                                        <BsCircleFill 
                                            onClick={() => {
                                                handleOnChangeActive(todo);
                                            }}
                                            className='Icon__Changeactive__true'
                                        />
                                        <p className='Home__Title__isCompleted'>
                                            {todo.textTitle}
                                        </p>
                                    </span>
                                    <div className='Box__Icon'>
                                        {/* <GrEdit /> */}
                                        <BsX 
                                            onClick={() => {
                                                deleteItem(todo);
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        }else {
                            return (
                                <div className='Home__Box__Title'>
                                    <span>
                                        <BsCircle 
                                            onClick={() => {
                                                handleOnChangeActive(todo);
                                            }}
                                            className='Icon__Changeactive'
                                        />
                                        <p className='Home__Title'>
                                            {todo.textTitle}
                                        </p>
                                    </span>
                                    <div className='Box__Icon'>
                                        <Link to={`/addpage/${todo.id}`}>
                                            <GrEdit 
                                                
                                            />
                                        </Link>
                                        {/* <BsX /> */}
                                    </div>
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
            <div>
                <Link 
                    to='/addpage'
                    className=''
                >
                    <BsFillPlusCircleFill className='Add__button'/>
                </Link>
            </div>
        </div>

    );
}

export default Home;
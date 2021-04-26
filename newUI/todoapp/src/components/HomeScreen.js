import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './controller/HomepageScreen.css'
import { MdPause } from "react-icons/md";
import { Link } from 'react-router-dom';
import ImageAdd from '../image/button-add.png';

HomepageScreen.propTypes = {
    
};

function HomepageScreen(props) {
    const { todoList, getTimeCurrent, removeTodo, toDoEveryday } = props;

    const [ activeWorkBox, setActiveWorkBox ] = useState(-1);
    return (
        <div className='Home__container'>
            <div className='Home__Mostuse__box'>
                <p className='Home__Mostuse__title'>Most used timer</p>
                <div className='Home__Mostuse__box__1'>
                    <p className='Home__Mostuse__box__title'>Breakfast</p>
                    <p>{toDoEveryday[0]} min</p>
                </div>
                <div className='Home__Mostuse__box__2'>
                    <div className='Home__Mostuse__box__Lunch'>
                        <p className='Home__Mostuse__box__title'>Lunch</p>
                        <p>{toDoEveryday[1]} min</p>
                    </div>
                    <div className='Home__Mostuse__box__Dinner'>
                        <p className='Home__Mostuse__box__title'>Dinner</p>
                        <p>{toDoEveryday[2]} min</p>
                    </div>
                </div>

            </div>
            <div className='Home__Other__timer'>
                <p className='Home__Other__title'>Other timer</p>
                <div className='Home__Other__WorkList'>
                    {todoList.map((todo,index) => {
                        if( activeWorkBox == index ){
                            return(
                                <div className='Home__Other__WorkBox__active'>
                                    <p className='Home__Other__WorkBox__title'>{todo.title}</p>
                                    <div className='Home__Other__WorkBox__timeicon'>
                                        <p>{todo.minutes} min</p>
                                        <MdPause 
                                            size={22}
                                            onClick={() => {
                                                removeTodo(todo,index);
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return(
                                <div 
                                    className='Home__Other__WorkBox'
                                    onClick={() => {
                                        setActiveWorkBox(index);
                                        console.log(activeWorkBox);
                                    }}
                                >
                                    <p className='Home__Other__WorkBox__title'>{todo.title}</p>
                                    <p>{todo.minutes} min</p>
                                </div>
                                
                            )
                        }
                    })
                    }
                </div>
            </div>
            <div className='Home__icon__box'>
                {/* <IoIosAddCircle color='#ff90a1'/> */}
                <Link
                    to="/AddWorkPage"
                >
                    <img src={ImageAdd}/>
                </Link>
            </div>
        </div>
    );
}

export default HomepageScreen;
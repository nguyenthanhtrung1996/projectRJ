import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from "react-icons/io";
import './controller/AddWorkPage.css'
import { Link } from 'react-router-dom';

import { BsCircleFill } from "react-icons/bs";

AddWorkScreen.propTypes = {
    
};

function AddWorkScreen(props) {
    const [ activeTime, setActiveTime ] = useState('');
    const [ activeWork, setActiveWork ] = useState('');

    console.log(activeWork);
    const { AddTodo } = props;
    return (
        <div className='Add__container'>
            <div className='Add__header'>
                <Link to='/'>
                    <IoIosArrowBack className='Add__icon' color="white" size='24px'/>
                </Link>
                <span className='Add__title'>New timer</span>
            </div>
            <div className='Add__body'>
                <div className='Add__selecttime'>
                    <p className='Add__selecttime__title'>Select time</p>
                    <div className='Add__selecttime__time'>
                        <div className='Add__selecttime__icon__box'>
                            <div 
                                className={activeTime == '15' ? 'Add__selecttime__icon__1 Add__selecttime__icon__1__active' : 'Add__selecttime__icon__1'}
                                onClick={() => {
                                    setActiveTime('15');
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>15 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box'>
                            <div 
                                className={activeTime == '30' ? 'Add__selecttime__icon__2 Add__selecttime__icon__2__active' : 'Add__selecttime__icon__2'}
                                onClick={() => {
                                    setActiveTime('30');
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>30 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box'>
                            <div 
                                className={activeTime == '45' ? 'Add__selecttime__icon__3 Add__selecttime__icon__3__active' : 'Add__selecttime__icon__3'}
                                onClick={() => {
                                    setActiveTime('45');
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>45 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box'>
                            <div 
                                className={activeTime == 'other' ? 'Add__selecttime__icon__4 Add__selecttime__icon__4__active' : 'Add__selecttime__icon__4'}
                                onClick={() => {
                                    setActiveTime('other');
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>Other..</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='Add__namework'>
                    <p className='Add__namework__title'>
                        Name
                    </p>
                    <div className='Add__namework__workbox'>
                        <div className='Add__namework__workbox__1 '>
                            <div 
                                className={activeWork == 'Workout' ? 'Add__namework__workbox__workout Add__namework__workbox__active' : 'Add__namework__workbox__workout'}
                                onClick={() => {
                                    setActiveWork('Workout');
                                }}
                            >
                                Workout
                            </div>
                            <div 
                                className={activeWork == 'Animation' ? 'Add__namework__workbox__animation Add__namework__workbox__active' : 'Add__namework__workbox__animation'}
                                onClick={() => {
                                    setActiveWork('Animation');
                                }}
                            >
                                Animation
                            </div>
                        </div>
                        <div className='Add__namework__workbox__2'>
                            <div 
                                className={activeWork == 'Design' ? 'Add__namework__workbox__design Add__namework__workbox__active' : 'Add__namework__workbox__design'}
                                onClick={() => {
                                    setActiveWork('Design');
                                }}
                            >
                                Design
                            </div>
                            <div 
                                className={activeWork == 'Egg' ? 'Add__namework__workbox__egg Add__namework__workbox__active' : 'Add__namework__workbox__egg'}
                                onClick={() => {
                                    setActiveWork('Egg');
                                }}
                            >
                                Egg
                            </div>
                            <div 
                                className={activeWork == 'Meditation' ? 'Add__namework__workbox__meditation Add__namework__workbox__active' : 'Add__namework__workbox__meditation'}
                                // className='Add__namework__workbox__meditation Add__namework__workbox__active'
                                onClick={() => {
                                    setActiveWork('Meditation');
                                }}
                            >
                                Meditation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Add__footer'>
                <Link className='Add__button'
                    to="/"
                    onClick={() => {
                        AddTodo({ title: activeWork, time: activeTime })
                    }}
                >
                    <p>Add to timer</p>
                </Link>
            </div>
        </div>
    );
}

export default AddWorkScreen;
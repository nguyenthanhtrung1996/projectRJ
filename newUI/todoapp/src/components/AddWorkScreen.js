import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from "react-icons/io";
import './controller/AddWorkPage.css'
import { Link } from 'react-router-dom';

import { BsCircleFill } from "react-icons/bs";

AddWorkScreen.propTypes = {
    
};

function AddWorkScreen(props) {
    return (
        <div className='Add__container'>
            <div className='Add__header'>
                <Link to='/'>
                    <IoIosArrowBack className='Add__icon' color="white" size='24px'/>
                </Link>
                <span className='Add__title'>AddWorkPageScreen</span>
            </div>
            <div className='Add__body'>
                <div className='Add__selecttime'>
                    <p className='Add__selecttime__title'>Select time</p>
                    <div className='Add__selecttime__time'>
                        <div className='Add__selecttime__icon__box'>
                            <div className='Add__selecttime__icon'>
                            </div>
                            
                            <p className='Add__selecttime__decription'>15 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box'>
                            <div className='Add__selecttime__icon'>
                            </div>
                            {/* <BsCircleFill className='Add__selecttime__icon'/> */}
                            <p className='Add__selecttime__decription'>30 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box'>
                            <div className='Add__selecttime__icon'>
                            </div>
                            <p className='Add__selecttime__decription'>45 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box'>
                            <div className='Add__selecttime__icon'>
                            </div>
                            <p className='Add__selecttime__decription'>Other..</p>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='Add__namework'>

                </div>
            </div>
            <div className='Add__footer'>
                
            </div>
        </div>
    );
}

export default AddWorkScreen;
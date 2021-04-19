import React from 'react';
import PropTypes from 'prop-types';
import './controller/HomepageScreen.css'
import { IoIosAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
HomepageScreen.propTypes = {
    
};

function HomepageScreen(props) {
    const { todoList, getTimeCurrent } = props;
    // console.log(props);

    return (
        <div className='Home__container'>
            <div className='Home__Mostuse__box'>
                <p className='Home__Mostuse__title'>Most used timer</p>
                <div className='Home__Mostuse__box__1'>
                    <p className='Home__Mostuse__box__title'>Breakfast</p>
                    <p>15 min</p>
                </div>
                <div className='Home__Mostuse__box__2'>
                    <div className='Home__Mostuse__box__Lunch'>
                        <p className='Home__Mostuse__box__title'>Lunch</p>
                        <p>15 min</p>
                    </div>
                    <div className='Home__Mostuse__box__Dinner'>
                        <p className='Home__Mostuse__box__title'>Dinner</p>
                        <p>15 min</p>
                    </div>
                </div>

            </div>
            <div className='Home__Other__timer'>
                <p className='Home__Other__title'>Other timer</p>
                <div className='Home__Other__WorkList'>
                    {todoList.map((todo) => {
                        return(
                            <div className='Home__Other__WorkBox'>
                                <p className='Home__Other__WorkBox__title'>{todo.title}</p>
                                <p>{todo.minutes} min</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className='Home__icon__box'>
                {/* <IoIosAddCircle color='#ff90a1'/> */}
                <Link className='Home__icon'
                    to="/AddWorkPage"
                >
                    {/* <p>+</p> */}
                </Link>
            </div>
        </div>
    );
}

export default HomepageScreen;
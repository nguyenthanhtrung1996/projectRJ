import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import './controller/AddWorkPage.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import DateTimePicker from 'react-datetime-picker';

// import DatePicker from 'react-datetime';
// import moment from 'moment';
// import 'react-datetime/css/react-datetime.css';

AddWorkScreen.propTypes = {
    
};

function AddWorkScreen(props) {
    const [ activeTime, setActiveTime ] = useState('');
    const [ activeWork, setActiveWork ] = useState('');

    const [ time, setTime ] = useState();

    const [value, setValue] = useState(new Date());


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // const [dt, setDt] = useState(moment());

    const getTime = (value) => {
        console.log(value.getTime())
        setValue(value);
        setTime(value.getTime());
    }
    
    console.log(activeWork, value);
    const { AddTodo } = props;
    return (
        <div className='Add__container'>
             {/* <div>
             <DatePicker
                inputProps={{
                style: { width: 250 }
                }}
                value={dt}
                dateFormat="DD-MM-YYYY"
                timeFormat="hh:mm A"
                onChange={val => setDt(val)}
            />
            </div> */}
            <div>
            {/* <Button color="danger" onClick={toggle}>Clicked!</Button> */}
            <Modal isOpen={modal} toggle={toggle} style={{
                overflowX: 'hidden',
                overflowY:'auto', 
                position:'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}>
                <ModalHeader toggle={toggle}>Time</ModalHeader>
                <ModalBody>
                <DateTimePicker
                    onChange={getTime}
                    value={value}
                    dateFormat="DD-MM-YYYY"
                    timeFormat="hh:mm A"
                />
                {/* <DatePicker
                    value={dt}
                    dateFormat="DD-MM-YYYY"
                    timeFormat="hh:mm A"
                    onChange={val => setDt(val)}
                /> */}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Ok</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
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
                        <div className='Add__selecttime__icon__box__1'>
                            <div 
                                className={activeTime == '15' ? 'Add__selecttime__icon__1 Add__selecttime__icon__1__active' : 'Add__selecttime__icon__1'}
                                onClick={() => {
                                    setActiveTime('15');
                                    setTime(15);
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>15 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box__2'>
                            <div 
                                className={activeTime == '30' ? 'Add__selecttime__icon__2 Add__selecttime__icon__2__active' : 'Add__selecttime__icon__2'}
                                onClick={() => {
                                    setActiveTime('30');
                                    setTime(30)
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>30 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box__3'>
                            <div 
                                className={activeTime == '45' ? 'Add__selecttime__icon__3 Add__selecttime__icon__3__active' : 'Add__selecttime__icon__3'}
                                onClick={() => {
                                    setActiveTime('45');
                                    setTime(45);
                                }}
                            >
                            </div>
                            <p className='Add__selecttime__decription'>45 min</p>
                        </div>
                        <div className='Add__selecttime__icon__box__4'>
                            <div 
                                className={activeTime == 'other' ? 'Add__selecttime__icon__4 Add__selecttime__icon__4__active' : 'Add__selecttime__icon__4'}
                                onClick={() => {
                                    setActiveTime('other');
                                    toggle();
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
                        AddTodo({ title: activeWork, time })
                    }}
                >
                    <p>Add to timer</p>
                </Link>
            </div>
        </div>
    );
}

export default AddWorkScreen;
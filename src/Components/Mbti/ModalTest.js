import React from 'react';
import ReactDOM from 'react-dom';
import MbtiTest from './MbtiTest';
import './ModalTest.module.css';

// mbtitest modal 
const Modal = (props) => {   
    return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h3>🎉 What &nbsp; is &nbsp;your &nbsp; MBTI?🎉</h3> 
            </div>
            <div className='body'>
                <ul>
                <p className = 'mbti'><MbtiTest/> </p>
                </ul>
            </div>

            <div className='footer'>
               <button id='closeBtn' onClick={props.onClose}>Close</button>
            </div>
        </div> 
    </div>
  )
}

const portalElement = document.getElementById('modal-window');

const Modalfin = props => {
    return (
        <>
            {ReactDOM.createPortal(<Modal onClose={props.onClose}></Modal>, portalElement)}
        </>
    )
}

export default Modalfin
import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';


// Modal 배경, 타이틀, 바디, 푸터 구성
const Modal = (props) => {  
    return (
    <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='title'>
              <h2>🎉 My &nbsp;MBTI &nbsp;IS &nbsp;ESFJ 🎉</h2>
          </div>
          <div className='img'> 
                  <img alt="mbti" src='https://ddnews.co.kr/wp-content/uploads/2021/12/ESFJ-%ED%8A%B9%EC%A7%95-4.jpg'/> 
          </div>
          <div className='body'>
              <p>동정심이 많고 다른 사람에게 관심을 쏟으며 여러 사람이 서로 
              <br />화합하는 것을 중시합니다. 타고난 협력자로서 동료애가 많고 
              <br />친절하며 능동적인 구성원입니다. 이야기 하기를 즐기며 
              <br />정리정돈을 잘하고, 참을성이 많고 다른 사람들을 잘 도와줍니다.
              </p>
          </div>
          <div className='footer'>
               <button id='closeBtn' onClick={props.onClose}>Close</button>
          </div>
        </div> 
    </div>
  )
}

// portalElement를 이용해 컴포넌트를 부모 컴포넌트 바깥에 렌더링
const portalElement = document.getElementById('modal-window');

const Modalfin = props => {
    return (
      <>
          {ReactDOM.createPortal(<Modal onClose={props.onClose}></Modal>, portalElement)}
      </>
    )
  }


export default Modalfin
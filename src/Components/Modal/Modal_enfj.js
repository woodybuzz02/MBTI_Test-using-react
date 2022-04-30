import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';


// Modal 배경, 타이틀, 바디, 푸터 구성
const Modal = (props) => {  
    return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={props.onClose}>  </button>
            </div>
          <div className='title'>
              <h2>🎉 My &nbsp;MBTI &nbsp;IS &nbsp;ENFJ 🎉</h2>
          </div>
          <div className='img'> 
                  <img alt="mbti" src='https://ddnews.co.kr/wp-content/uploads/2021/12/Eh_8T33VkAAiWoD.png.webp'/> 
          </div>
          <div className='body'>
               <p> 따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 
                <br />동정심이 많습니다. 상당히 이타적이고 민첩하고 
                <br />인화를 중요시하며 참을성이 많으며, 다른 사람들의  
                <br />생각이나 의견에 진지한 관심을가지고 공동선을 위하여 
                <br />다른 사람의 의견에 대체로 동의합니다.</p>
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
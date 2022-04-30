import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css';


// Modal 배경, 타이틀, 바디, 푸터 구성
const Modal = (props) => {  
    return (
    <div className='modalBackground'>
        <div className='modalContainer'>
          <div className='title'>
              <h2>🎉 My &nbsp;MBTI &nbsp;IS &nbsp;INFJ 🎉</h2>
          </div>
          <div className='img'> 
                  <img alt="mbti" src='https://ddnews.co.kr/wp-content/uploads/2021/12/INFJ-2.jpeg.webp'/> 
          
          </div>
        
          <div className='body'>
              <p>인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구합니다.
                <br />창의력이 좋으며, 성숙한 경우엔 강한 직관력으로 타인에게 
                <br />말없이 영향력을 끼칩니다.독창성과 내적 독립심이 강하며, 
                <br />확고한 신념과 열정으로 자신의 영감을 구현시켜 나가는
                <br /> 정신적 지도자들이 많습니다.</p>
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
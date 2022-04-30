import { useState } from 'react'
import classes from './Footer.module.css'
import ModalTest from '../Mbti/ModalTest.js'
const Footer = () => {

  // 간단 mbti테스트 모달 open, close 관리
  const [openModal4, setOpenModal4] = useState(false);

  const onClick3 = () => {
    setOpenModal4(true);
  }

  const onClose3 = () => {
    setOpenModal4(false);
  }

  return (
      <>
     <footer>

       {/* 이모지에 조원별 깃허브 연결 */}
    <div className={classes.Footer}>
       <a className={classes.a} href="https://github.com/woodybuzz02">&#128021;</a>
       <a className={classes.a} href="https://github.com/95Glory">&#128022;</a>
       <a className={classes.a} href="https://github.com/wonillin">&#128002;</a>
       <a className={classes.a} href="http://github.com/yunjo1">&#128005;</a>
        
        {/* 간단 mbti테스트 모달창 연결버튼*/}
        <div className={classes.a}>
        <button className="openModalBtn1" onClick={onClick3}>quick MBTI TEST</button>
         {openModal4 ? <ModalTest onClose={onClose3} /> : null}
         </div>
    </div>  
    </footer> 
    </>
  )
}

export default Footer
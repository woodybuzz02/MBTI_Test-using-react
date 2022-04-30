import { useState } from "react";
import './Body.module.css'
import ModalInfj from '../Modal/Modal_infj'
import ModalEsfj from '../Modal/Modal_esfj'
import ModalEnfj from '../Modal/Modal_enfj'

// useState을 이용한 모달 Open, Close 관리(infj, esfj, enfj)
const Body = (props) => {
        const [openModal, setOpenModal] = useState(false);
        const [openModal1, setOpenModal1] = useState(false);
        const [openModal2, setOpenModal2] = useState(false);

        const onClick = () => {
            setOpenModal(true);
        }

        const onClose = () => {
            setOpenModal(false);
        }
        
        const onClick1 = () => {
            setOpenModal1(true);
        }

        const onClose1 = () => {
            setOpenModal1(false);
        }

        const onClick2 = () => {
            setOpenModal2(true);
        }

        const onClose2 = () => {
            setOpenModal2(false);
        }

    return (
        <>
        {/*  각자 MBTI가 담긴 카드 */}
            <section className="Section">
                <div className="Card">
                <h1>infj</h1>
                <img className="Img" src="https://static.neris-assets.com/images/personality-types/avatars/infj-advocate.svg"
                    alt="" />
                <hr />
                {/* MBTI설명을 담은 Modal을 띄우는 버튼_infj */}
                <button className="openModalBtn" onClick={onClick}>Click me!</button>
                {openModal ? <ModalInfj onClose={onClose} /> : null}
                </div>
                <div className="Card">
                <h1>esfj</h1>
                <img className="Img" src="https://static.neris-assets.com/images/personality-types/avatars/esfj-consul.svg"
                    alt="" />
                <hr />
                    <button className="openModalBtn" onClick={onClick1}>Click me!</button>
                    {openModal1 ? <ModalEsfj onClose={onClose1} /> : null}
                </div>
                <div className="Card">
                <h1>enfj</h1>
                <img className="Img" src="https://static.neris-assets.com/images/personality-types/avatars/enfj-protagonist.svg"
                    alt="" />
                <hr />
                    <button className="openModalBtn" onClick={onClick2}>Click me!</button>
                    {openModal2 ? <ModalEnfj onClose={onClose2} /> : null}
                </div>
            </section>
        </>
    )
};

export default Body;
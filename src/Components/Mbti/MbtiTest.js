import  { React, useState } from 'react'

// 간단하게 mbtitest를 하는 컴포넌트
const MbtiTest = () => {
    // state를 활용하여 E 0R I인지 판단
    const [eOrI1, setEOrI1] = useState();
    const clickEOrI1 = (e) => {
        setEOrI1(Number(e.target.value))
    }

    const [eOrI2, setEOrI2] = useState();
    const clickEOrI2 = (e) => {
        setEOrI2(Number(e.target.value))
    }

    const [eOrI3, setEOrI3] = useState();
    const clickEOrI3 = (e) => {
        setEOrI3(Number(e.target.value))  
    }

    const eOrISum = eOrI1+eOrI2+eOrI3
    const eOrI = eOrISum>= 2 ? "E" : "I" 
    
    // state를 활용하여 S 0R N인지 판단
    const [sOrN1, setSOrN1] = useState();
    const clickSOrN1 = (e) => {
        setSOrN1(Number(e.target.value))
    }

    const [sOrN2, setSOrN2] = useState();
    const clickSOrN2 = (e) => {
        setSOrN2(Number(e.target.value))
    }

    const [sOrN3, setSOrN3] = useState();
    const clickSOrN3 = (e) => {
        setSOrN3(Number(e.target.value))  
    }

    const sOrNSum = sOrN1+sOrN2+sOrN3;
    const sOrN =  sOrNSum>= 2 ? "N" : "S" 

    // state를 활용하여  F 0R T인지 판단
    const [fOrT1, setFOrT1] = useState();
    const clickFOrT1 = (e) => {
        setFOrT1(Number(e.target.value))
    }

    const [fOrT2, setFOrT2] = useState();
    const clickFOrT2 = (e) => {
        setFOrT2(Number(e.target.value))
    }

    const [fOrT3, setFOrT3] = useState();
    const clickFOrT3 = (e) => {
        setFOrT3(Number(e.target.value))  
    }

    const fOrTSum = fOrT1+fOrT2+fOrT3;
    const fOrT =  fOrTSum >= 2 ? "T" : "F";

    // state를 활용하여 J 0R P인지 판단
    const [jOrP1, setJOrP1] = useState();
    const clickJOrP1 = (e) => {
        setJOrP1(Number(e.target.value))
    }

    const [jOrP2, setJOrP2] = useState();
    const clickJOrP2 = (e) => {
        setJOrP2(Number(e.target.value))
    }

    const [jOrP3, setJOrP3] = useState();
    const clickJOrP3 = (e) => {
        setJOrP3(Number(e.target.value))  
    }

    const jOrPSum = jOrP1+jOrP2+jOrP3;
    const jOrP = jOrPSum >= 2 ? "P" : "J" ;

    // mbti테스트 결과
    const mbtiResult = eOrI+sOrN+fOrT+jOrP;


  return (
    <>
        <p>
            <div>주말을 보내는 유형중 자신에게 가까운 유형은?</div><br />
            <input type="radio" name="eOrI1" value="1" onChange={clickEOrI1} />
            <span>친구들을 만나 노는것을 선호한다</span><br />
            <input type="radio" name="eOrI1" value="0" onChange={clickEOrI1} />
            <span>친구들과 노는것도 좋지만 혼자 집에서 휴식을 선호한다</span>
        </p>
        <br />

        <p>
            <div>어떠한 무리에서 자신은 어떤 사람으로 인식이 되고 싶은가?</div><br />
            <input type="radio" name="eOrI2" value="0" onChange={clickEOrI2} />
            <span>조용히 평범하고 지내는 아이</span><br />
            <input type="radio" name="eOrI2" value="1" onChange={clickEOrI2} />
            <span>관심을 많이 받는 아이</span>
        </p>
        <br />

        <p>
            <div>친구가 메세지로 본인이 잘 아는 분야에 대해 질문을 하였다. <br /> 본인이 대답을 하는 방식은?</div><br />
            <input type="radio" name="eOrI3" value="0" onChange={clickEOrI3} />
            <span>곰곰히 생각하여 내용을 정리하고 메세지로 보낸다.</span><br />
            <input type="radio" name="eOrI3" value="1" onChange={clickEOrI3} />
            <span>전화를 걸어 직접 말로 전달한다.</span>
        </p>
        <br />


        <p>
            <div>풍선을 보면 떠오르는 생각은?</div><br />
            <input type="radio" name="sOrN1" value="0" onChange={clickSOrN1} />
            <span>풍선 터질 것같은데?</span><br />
            <input type="radio" name="sOrN1" value="1" onChange={clickSOrN1} />
            <span>헬륨 마시고 목소리 변하는 거 하고 싶다.</span>
        </p>
        <br />

        <p>
            <div>나는 노래를 들을 때</div><br />
            <input type="radio" name="sOrN2" value="1" onChange={clickSOrN2} />
            <span>멜로디보다는 가사가 좋아야지! 가사를 잘 기억한다.</span><br />
            <input type="radio" name="sOrN2" value="0" onChange={clickSOrN2} />
            <span>가사보다는 멜로디지! 가사를 잘 기억못한다.</span>
        </p>
        <br />

        <p>
            <div>시험이 다가오는데 공부가 손에 안 잡힌다면, 무슨 생각을 하는가?</div><br />
            <input type="radio" name="sOrN3" value="0" onChange={clickSOrN3} />
            <span>출제 확률이 높은 범위는?</span><br />
            <input type="radio" name="sOrN3" value="1" onChange={clickSOrN3} />
            <span>시험은 왜 존재하고 왜 봐야만 하는 걸까?</span>
        </p>
        <br />


        <p>
            <div>시험에 떨어진 친구가 속상해하며 나에게 전화를 걸어왔다.<br /> 이때 나의 반응은?</div><br />
            <input type="radio" name="fOrT1" value="0" onChange={clickFOrT1} />
            <span>다음엔 꼭 붙을 수 있을 거야. (위로한다)</span><br />
            <input type="radio" name="fOrT1" value="1" onChange={clickFOrT1} />
            <span>무슨 시험인데? 몇 점 넘어야 되는데?</span>
        </p>
        <br />

        <p>
            <div>갑작스러운 교통사고를 당해서 친구에게 전화를 걸었다.전화를 받은 친구가 나에게 "헐 어떡해! 보험은 들었어?" 라고 했을 때, 나의 반응은?</div><br />
            <input type="radio" name="fOrT2" value="0" onChange={clickFOrT2} />
            <span>내 걱정보다 보험 얘기를 먼저 꺼내는 친구에게 서운한 마음이 든다.</span><br />
            <input type="radio" name="fOrT2" value="1" onChange={clickFOrT2} />
            <span>내가 보험을 들었는지 생각해본다.</span>
        </p>
        <br />

        <p>
            <div>취업이 안돼 힘들어하는 친구를 만난 상황에서 나의 반응은?</div><br />
            <input type="radio" name="fOrT3" value="0" onChange={clickFOrT3} />
            <span>곤란한 질문은 피하고, ‘힘들지..?’ 라며 위로의 말을 건넨다.</span><br />
            <input type="radio" name="fOrT3" value="1" onChange={clickFOrT3} />
            <span>무슨 준비하고있는데? 이력서는 넣어봤어? </span>
        </p>
        <br />

        <p>
            <div>친구들을 집에 초대하게 되었다. 친구들이 오기전 음식을 준비 할 때 <br />나의 행동은?</div><br />
            <input type="radio" name="jOrP1" value="0" onChange={clickJOrP1} />
            <span>음식이 모자라지는 않을까? 지난번에 음식이 모자랐을 때는 <br />몇명이 왔었더라?</span><br />
            <input type="radio" name="jOrP1" value="1" onChange={clickJOrP1} />
            <span>일단 준비하고 부족하면 그때 치킨을 더 시켜먹지 뭐!</span>
        </p>
        <br />

        <p>
            <div>여행을 가게 되었다. 여행 계획을 세울 때 나의 성향은?</div><br />
            <input type="radio" name="jOrP2" value="1" onChange={clickJOrP2} />
            <span>어차피 내리면 숙소 갈꺼니까 가서 짐풀고 생각하자. 그날 가고 싶은곳이 바뀔수도 있고 그대로 가고 싶으면 그때 버스 알아보면 되지!</span><br />
            <input type="radio" name="jOrP2" value="0" onChange={clickJOrP2} />
            <span>공항에서 숙소까지 얼마나 걸릴까? 6시까지 A관광지에 가고 싶은데 몇시 버스를 탈지 정해서 예약해야겠다!</span>
        </p>
        <br />

        <p>
            <div>과제를 할 때 나의 성향은? </div><br />
            <input type="radio" name="jOrP3" value="0" onChange={clickJOrP3} />
            <span>계획도 없는데 무슨 자료 조사를 시작하라는 거지? 이러다가 계획이 바뀌면 또 자료조사를 해야 하는데, 너무 비효율적이잖아? 일단 계획부터 세워보자!</span><br />
            <input type="radio" name="jOrP3" value="1" onChange={clickJOrP3} />
            <span>아무것도 모르는데 무슨 계획을 세우라는 얘기지? 어느 부분에 시간을 더 할애해야 할지, 어디부터 어디까지 자료조사를 해야 할지는 <br />자료조사부터 해보고 결정하자!</span>
        </p>

        <br />
        <br />
        <a>🎉당신의 mbti는 {mbtiResult}입니다!!🎉</a>



    </>

    )

    }
export default MbtiTest
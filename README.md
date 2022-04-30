# FrontEnd Project
3주동안 배운 내용을 토대로 직접 적용해보는 소규모 프로젝트 진행
##  What is your MBTI?
**자신과 상대의 성향을 확인하는 것만큼 흥미로운 건 없다.
상대가 어떤 사람인지를 살펴보는 것만으로도 상황대처 및 대인관계 설정이 용이하기 때문이다.
그래서인지 몰라도 최근 누구를 만나든지 자신의 MBTI를 공개하거나 상대의 MBTI를 묻는 사람들이 많아졌다.
화두에 오른 성격유형검사(MBTI) 를 해주는 기능을 구현하였고, 팀원들의 MBTI를 소개하는 프로젝트를 구상해보았다.**
## Team members
김영광 (GitHub Url : https://github.com/95Glory)
최원일 (GitHub Url : https://github.com/wonillin)
서예원 (GitHub Url : https://github.com/95Glory)
강윤조 (GitHub Url : https://github.com/yunjo1)
## Language
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">   <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">   <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
## Requirements
Header 부분에 로고를 삽입하여 MBTI를 전문적으로 검사해주는 사이트 연결
Modal기능을 구현하여 Content 출력
이모지를 활용하여 멤버들의 Github 주소로 이동
사용자의 MBTI 검사기
## UI Structure

![UI](https://user-images.githubusercontent.com/102516088/164531400-d6a0d2fb-9945-48be-b141-d8752b4ef9ee.png)
## Coding convention
JavaScript 기반 작업으로 camelCase를 적용
## Trouble Shooting

Modal Window가 Footer에 여백없이 부착되어있는 오류가 발생.
현재 *해결중*
VS code Editor 에서 제공하는 Live Share를 실행 후 http://localhost:3000/ 주소에 접속시,
   사용자마다 UI가 다르게 보이는 현상
사용자의 해상도 차이가 이유라는것을 파악하였으나 아직 *미해결*
Modal 안에 작성한 p태그의 글씨체가 바뀌지 않는 현상
Css p태그 font-family 설정 이후에도 바뀌지 않아 **미해결**
MBTI 검사에서 유형을 판별하기 위해 radio 버튼 활성화시, Value값을 전달하여
   값을 도출하려 하였지만 클릭시 Value값이 지속적으로 증가하여 기대값과 다른 결과가 나오는 오류발생
State구문으로 작성하여 해당 오류 *해결*
Modal Window에서 요소 내용이 요소크기를 벗어나서 일부 보이지 않음.
Modal css에 스크롤을 적용하여 *해결*
## Review
### 김영광
---

강의를 들으면서 하루도 빠지지 않고 코드리뷰를 해왔고, 적용하였던 코드를 다시 작성해 보는 등 수업내용을 완전히 학습하였다고 생각하였지만, 실무자 입장이 되어 요구사항들을 구현하려고 하다보니 학습하였던 기술들을 실제로 적용시키는 스킬이 얼마나 중요한 역량인지 크게 깨닫게 되었다. 나는 한 가지 기능을 구현시키기 위해서 다소 복잡하고 작성한 본인도 헷갈리는 코드를 작성하였지만 같은 팀원들의 Refactoring 을 통해 간단화되고 직관적인 코드가 작성이되는 모습을 보고 깊은 반성을 하게 되었다.
### 최원일
---

평소 머릿속으로만 생각하던 레이아웃, 기능, 코드들을 직접 작성하고 구현하는 것이
쉬운 일이 아니라는 것을 깨닫게 되었다. 수업 후 복습 차원에서 코드를 다시 보고 정리하며 나름대로 이해했다고 생각했던 것들이 떠오르지 않아 답답했음. 학습을 더 효율적으로 할 수 있는 방법을 강구해야할 것 같다. 또한, 팀원들과 함께 프로젝트를 진행하며 개발 프로젝트에서 어떻게 팀원들과 소통해야 하는지 배울 수 있었고, 다른 팀원이 만든 기능들을 보며 영감도 얻을 수 있던 값진 시간이었다.
### 서예원
---

확실히 강의로 들은 것을 실제로 적용을 해보니 어떤 부분을 모르고 있는지를 알 수 있었다.
이번 기회로 느낀 것은 배운 것을 스스로 해보는 시간을 더 많이 가져야될 것같다.
또한 팀원들이 기능 구현한 것을 보며 더 많이 공부해야겠다는 생각이 들었다.
개인적으로 아쉬운 점은 좀 더 깔끔하게 코드를 작성하지 못한 것이다.
코드를 작성했지만 너무 길게 써서 보기 힘들었다.
중복되는 부분을 줄여서 코드를 작성하면 좋았겠지만 그게 잘 되지않아서 이 부분은 연습을 해야될 것같다.
### 강윤조
---

수업이 끝나고 코드들을 읽어보며 문법적인 리뷰는 계속 했지만 파일들의 소속과 연결성을 자세히 보지 않았던게 확 와닿았다.
수업을 진행할 때는 파일을 규칙을 생각하며 만들지 않았어서 프로젝트를 시작할 때 파일을 정리하고 규칙대로 만들어내는게 힘들었다.
팀원들과 협동하면서 서로 부족한 부분을 각자의 강점으로 피드백 해주며 혼자서는 절대 실현하지 못할 프로그램을 만들어낸 것이 너무 뿌듯했다.
트러블 슈팅을 작성하면서 아직 해결하지 못한 점들도 있지만 우여곡절 끝에 해결했던 기억이 나고 다시한번 머리 속으로 Remind 하게 되어 너무 좋았다.

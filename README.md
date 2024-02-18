
# Todo-List-APP만들기 (React사용)

## 기록용 날짜 기록 
### 1. 1월 7일 Todo컴포넌트에서 Todo아이템 리스트 렌더링 하는것, 그리고 @material ui이용해서 ui개선하는 것까지 Hello-world찍어봄
### 2. 1월 18일 item 추가 기능 구현(inputText창, +버튼 구현 , onInputChange함수, onButtonClick함수 eventHandler구현)
### 3. 1월 22일 item delete(삭제)기능 구현 ( ListSecondaryAction에 IconButton추가 및 deleteItem App.js에 구현, Todo.js에서 deleteItem전달, deleteEventHandeler구현 및 연결) 
  - ListSecondaryAction
    -  @mui/material(Material-UI 라이브러리)에서 제공되는 컴포넌트 'ListItem'내에서 부가적인 동작 정보 표시
    -  보통 ListItmeText와 함께 사용되며, ListItemSecondaryAction은 아에템의 오른쪽 끝에 위치, 버튼,아이콘버튼, 체크박스등 동작 수행
  - onKeyPress이벤트핸들러
    - 더이상 사용이 권장되지 않는다고 함.('onKeyPress' is deprecated.) onKeyDown 및 onKeyUp 이벤트 권장
    - onKeyDown은 키를 눌렀을때의 이벤트 정의
    - onKeyUp은 눌렀다가 뗐을때의 이벤트 정의
### 4. 1월 24일 editItem(수정) 기능 구현 (체크박스에 체크, 타이틀 변경)
### 5. 2월 15일 (거의 한달만) 
  - 서비스 통합 CORS(Cross-Origin-Resource Sharing) 
  - 백앤드 부분 WebMvcConfig클래스 구현
  - 추후 effect훅 구현 (무한 렌더링 해결)
### 6. 2월 18일
-------------------
  #### fetch함수
  - fetch는 API 서버로 http요청을 송신및 수신하는 메서드 fetch(url,option)
  - promise오브젝트를 반환하고, Pending,Fulfilled,Rejected 상태가 있고
  - onResolve,onReject,onError 콜백함수를 전달해 응답 처리
  - 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다. 
  - fetch() .then, catch 등을 사용하여 코드 간단하게 하였음 fetch()로 GET요청 등 HTTP통신
  - 근데 안되는게 갑자기 많아졌다 add누르면 리스트 없어지는 등 꼭 수정해야겠다 다시보자
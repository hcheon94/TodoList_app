
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

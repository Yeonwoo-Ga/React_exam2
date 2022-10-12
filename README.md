App.js에서 만들어진 Todolist를 받고
Layout을 짜서 Todolist컴포넌트를 한번에 받아올 수 있도록 했습니다.
라우팅을 할때 Home에 전체적으로 Todolist를 불러올 수 있어 편했습니다
Form 컴포넌트는 따로 스타일을 하기위해 나눴습니다.
Header 또한 따로 스타일을 하기위해 나눴습니다.
List에서 Todo의 하나하나의 박스를 바로 컴포넌트로 넣어줄것이기 때문에 따로
Todo 한 객체의 컴포넌트는 만들지 않았습니다.
Detail은 상세페이지라서 따로 나눠줬습니다
Home은 라우터의 중복사용이 불가능하여 App에 라우터를 사용하고 Home으로 Todolist를 빼줬습니다.
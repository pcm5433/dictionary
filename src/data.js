const Contents = {
inputs:{
    word: "",
    content: "",
    category: ""
},
datas:[{
    id: 1,
    word: "tag",
    content: "html에 사용하는 약속된 용어들로, 요소를 만들 때 사용한다.",
    category: "html",
    createDate: "2024-05-07"
}, {
    id: 2,
    word: "hn",
    content: "제목 태그(heading tag)로 사용하며, h1부터 h6까지 있다.",
    category: "html",
    createDate: "2024-05-07"
}, {
    id: 3,
    word: "p",
    content: "하나의 단락을 나타내는 태그이다.",
    category: "html",
    createDate: "2024-05-07"
}, {
    id: 4,
    word: "br",
    content: "줄을 바꿔주는 태그이며, 닫는 태그가 필요 없다.",
    category: "html",
    createDate: "2024-05-07"
}, {
    id: 5,
    word: "a",
    content: "inline 태그의 한 종류로, href='주소'를 넣으면 a 태그로 감싼 요소를 클릭했을 때 해당 주소로 이동한다. inline 태그이기 때문에 css를 넣으려면 display: block;을 줄 필요가 있다.",
    category: "html",
    createDate: "2024-05-07"
}, {
    id: 6,
    word: "img",
    content: "이미지를 넣을 때 사용하는 태그. src=''로 이미지를 불러오며, alt='' 안에 이미지에 대한 설명을 입력한다. alt 내용은 반드시 입력할 것.",
    category: "html",
    createDate: "2024-05-09"
}, {
    id: 7,
    word: "lorem",
    content: "테스트 하고 싶을 때 사용하는 태그로, 입력할 시 의미가 없는 문구를 출력해 준다.",
    category: "html",
    createDate: "2024-05-09"
}, {
    id: 8,
    word: "span",
    content: "아무런 효과가 없는 태그. 강조하고 싶은 부분 등, 태그 안에서 특정 부분에만 스타일을 주고 싶을 때 사용한다.",
    category: "html",
    createDate: "2024-05-09"
}, {
    id: 9,
    word: "class",
    content: "<div class=''></div>와 같은 식으로 사용한다. 이름을 지어주는 것이며, css를 넣을 때처럼 특정 태그를 잡을 필요가 있을 때 넣어준다.",
    category: "html",
    createDate: "2024-05-09"
}, {
    id: 10,
    word: "background-color",
    content: "해당 스타일을 지정한 요소에 배경색을 넣는다. background-color: 색상명;, background-color: #nnnnnn;, background-color: rgb(n,n,n)과 같은 식으로 사용한다.;",
    category: "css",
    createDate: "2024-05-09"
}, {
    id: 11,
    word: "display: flex",
    content: "요소를 옆으로 나열한다. 자식이 아닌 부모에게 주어야 하며, 부모 안에 있는 모든 자식을 일렬로 나열한다.",
    category: "css",
    createDate: "2024-05-09"
}, {
    id: 12,
    word: "display: block",
    content: "inline 태그를 block으로 변경한다.",
    category: "css",
    createDate: "2024-05-09"
}, {
    id: 13,
    word: "text-align: center",
    content: "기본 왼쪽 정렬인 텍스트를 가운데 정렬로 변경한다.",
    category: "css",
    createDate: "2024-05-09"
}, {
    id: 14,
    word: "margin",
    content: "해당 스타일을 지정한 요소 바깥쪽에 여백을 만든다. 배경색이 있어도 늘어나지 않는다. margin: 0 auto;로 값을 지정할 경우, 요소를 가운데에 가져다 놓는다.",
    category: "css",
    createDate: "2024-05-09"
}, {
    id: 15,
    word: "padding",
    content: "해당 스타일을 지정한 요소 안쪽에 여백을 만든다. 배경색이 있으면 그만큼 늘어난다.",
    category: "css",
    createDate: "2024-05-09"
}, {
    id: 16,
    word: "border",
    content: "선이 생긴다. border: 두께 스타일 색상; 같은 식으로 사용하며, 선의 두께만큼 width 값과 height 값이 늘어난다. (ex. 1px의 border를 지정했을 경우, width 값이 200px이라면 전체 width 값은 202px이 되는 것)",
    category: "css",
    createDate: "2024-05-09"
}
]}

const Reducer = (state, action)=>{
    switch(action.type){
        case "create":
            return{
                inputs: Contents.inputs,
                datas: state.datas.concat(action.data)
            }
        case "remove":
            return{
                ...state,
                datas: state.datas.filter((data)=>data.id !== action.id)
            }
        case "edit":
            return{
                ...state,
                datas: state.datas.map((data)=>data.id === action.id ?
                    {...data, content: action.content} : data)
            }
        case "search":
            return{
                ...state,
                datas: state.datas.filter((data)=>{return(
                    data.word.toLowerCase().includes(action.text.toLowerCase()) ||
                    data.content.toLowerCase().includes(action.text.toLowerCase())
                )})
            }
        default:
            return state
    }
}
export{
    Contents,
    Reducer
}
import React, { useState } from 'react';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['봄바일기','채영일기','민우일기']);
 let [따봉,따봉변경] = useState([0,0,0,0,0])
 let [modal,setModal] = useState(false)
 let [누른제목, 누른제목변경] = useState(0)
 
 let [inputs,setInput] = useState([])

 function addBlog(){
   let copyArr2 = [...글제목]
   글제목변경([inputs,...copyArr2])
 }


 function modalClick(){
   setModal(!modal)
 }

 function onClick(i){
    let copyArr = [...따봉]
    copyArr[i]++
    따봉변경(copyArr)
   }

 
//  function 제목바꾸기(){ // 쌩으로 글제목은 바꾸지못한다. 그러니 바꾸고싶을때 ! 복사를 한다. (하나의 기술) deep copy = spread operator
//    let newArr = [...글제목]
//    newArr.sort()
//    글제목변경(newArr)
//  }

  return (
    <div className="App">
    <div className="black-nav">
      <div>Sophie Blog</div>
    </div> 
      {
        글제목.map((el,i)=>{
         return  <div className = "list">
         <h3 onClick = {()=>{누른제목변경(i)}}>{ el } <span onClick={()=>onClick(i)}>👍🏻</span>{따봉[i]}</h3>
         <p>2월 17일 발행</p>
         <hr/>
       </div>
        })
      }
      <div className = "publish">
        <input onChange = {(event)=>setInput(event.target.value)}/>
        <button onClick = {addBlog}>저장</button>
      </div>
      <button onClick = {modalClick}>열고닫기</button>
      {modal ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null }
    </div>
  );
}



function Modal(props){
  return (
    <div className ="modal">
          <h2>{props.글제목[props.누른제목]}</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  ) 
}
export default App;

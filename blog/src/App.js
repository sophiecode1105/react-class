import React, { useState } from 'react';
import './App.css';

function App() {

 let [글제목,글제목변경] = useState(['봄바일기','채영일기','민우일기']);
 let [따봉,따봉변경] = useState(0)
 function onClick(){
   따봉변경(따봉+1)
 }
 function 제목바꾸기(){ // 쌩으로 글제목은 바꾸지못한다. 그러니 바꾸고싶을때 ! 복사를 한다. (하나의 기술) deep copy = spread operator
   let newArr = [...글제목]
   newArr.sort()
   글제목변경(newArr)
 }
  let posts = '강남고기맛집'

  return (
    <div className="App">
    <div className="black-nav">
      <div>Sophie Blog</div>
    </div>
      <div className = "list">
        <h3>{ 글제목[0] } <span onClick={ onClick }>👍🏻</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <button onClick = { 제목바꾸기 }>버튼</button> 
      <div className = "list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

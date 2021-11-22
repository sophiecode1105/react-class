import React, { useState } from 'react'
import { useHistory , useParams } from 'react-router-dom'
function Detail(props){

    let { id } = useParams()
    let history = useHistory(); //history라는 object 방문기록등을 저장해놓은!!
    //history.pupsh('/')<-버튼을 누르면 이 경로로 이동해주세요 : 버튼 커스터마이징할수있슴다~!

    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.shoes[id].title}</h4>
              <p>{props.shoes[id].content}</p>
              <p>{props.shoes[id].price}원</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger">뒤로가기</button> 
            </div>
          </div>
      </div>  
      )
    };
  export default Detail;
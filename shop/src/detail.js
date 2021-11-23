import React, { useEffect, useState } from 'react'
import { useHistory , useParams } from 'react-router-dom'



function Detail(props){

    const [isRest, setIsrest] = useState(false)
    const [inputData, setInputdata] = useState('')


    useEffect(()=>{
        setTimeout(() => {
           setIsrest(true)
        // return () => {clearTimeout(타이머)} //detail컴포넌트 사라질때 타이머 해제스킬
        }, 2000);
    },[isRest])

    let { id } = useParams()
    let items = props.shoes.find((item) => item.id == id)
    let history = useHistory(); //history라는 object 방문기록등을 저장해놓은!!
    //history.pupsh('/')<-버튼을 누르면 이 경로로 이동해주세요 : 버튼 커스터마이징할수있슴다~!

    function Rest (){
        return( 
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
        )
 
    }

    return (
        <div className="container">
            <div>
                <p className="red">Detail</p>
            </div>
          {isRest ? null : <Rest /> }
          {inputData}
          <input onChange = {(e)=>{setInputdata(e.target.value)}}/>
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{items.title}</h4>
              <p>{items.title}</p>
              <p>{items.price}원</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger">뒤로가기</button> 
            </div>
          </div>
      </div>  
      )
    };
  export default Detail;
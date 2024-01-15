import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



function Category({ datasrc, onCategoryClick }) {

  const [a, setA] = useState(0);

  const colorChange = (idx) => {
    // setA((prevIndex) => (prevIndex === idx ? "" : idx)); //클릭후 같은 자리 클릭하면 다시 원상복귀되는 오류발생..
    setA((prevIndex) => (prevIndex === idx ? prevIndex : idx));
    //이전인덱스가 현재 인덱스와 같으면 이전인덱스, 아니면 현재인덱스
  }

  return (
    <ul className="d-flex justify-content-around itemTitleBox">
      {
        datasrc.map((v, idx) => {
          console.log(v)
          return (
            <li className={`d-flex flex-column align-items-center itemTitle ${a === idx ? 'b' : ''}`} key={idx} onClick={() => {
              //현재인덱스가 맵핑된 인덱스와 같으면 클래스 b를 넣어서 클릭한 글자색상을 바꿔준다.
              onCategoryClick(idx) // 카테고리를 클릭하면 해당제품이 나오는 함수
              colorChange(idx)//클릭한 리스트의 색상을 바꿔주는 함수호출
            }}>
              <img src={v.imgsrc} alt="담화박스" />
              <div className="itemTitle">{v.categorytitle}</div>
            </li>
          )
        })
      }
    </ul>

  )
}

export default Category
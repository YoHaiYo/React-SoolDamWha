import React from 'react'

function ProductCard(props) {
  return (
    <>
      {
      props.datasrc.map((el, idx)=> {
        return (
          <div class="Imgbox " key={`div${idx}`}> {/* 카테고리에 맞게 클래스명 */}          
          <a href="">
            <span><img src={el.imgsrc} alt=""/></span>
            <div class="ItemDesc">
              <div class="productName ">{el.productName}</div>
              <div class="productPrice ">{el.productPrice}</div>
              <div class="starNum d-flex">{el.starNum}</div>
              <p class="desc">{el.desc}</p>
            </div>
          </a>
      </div>
        )
      })      
    }
  </>
  )
}

export default ProductCard

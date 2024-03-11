import React, { useState } from 'react'
import ProductCard from '../workroom/JY/ProductCard'
import Category from '../workroom/JY/Category'
import { MoreButton } from '../styled/Btns';
import ProductSwiper from '../workroom/JY/ProductSwiper'

function Product(props) {
  //현 컴포넌트가 king.js에서 props.datasrc 로 전체상품 데이터 가져온것 확인
  const [tap, setTap] = useState(0);

  const handleCategoryClick = (idx) => {
    setTap(idx);
    console.log(idx)
  }
  console.log(props.datasrc)


  return (
    <section id="itemTitle" className="mb80 mt80 wrap container" >

      <h2 className="text-center">
        <a href="#closeTop" className="text-decoration-none scrollTop">
          지금 당장 술 담아보기
        </a>
      </h2>
      <Category datasrc={props.catesrc} tap={tap} onCategoryClick={handleCategoryClick}></Category>
      <ProductCard datasrc={props.datasrc} tap={tap} />
      {/* <ProductSwiper datasrc={props.datasrc} tap={tap}></ProductSwiper>
      <MoreButton>더보기</MoreButton> */}
    </section>
  )
}

export default Product
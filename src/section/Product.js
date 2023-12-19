import React, { useState } from 'react'
// import ProductCard from '../workroom/SH/ProductCard'

function Product(props) {
  const [tabnum, setTabnum] = useState(0);

  return (
    
    
    <section id="itemTitle" className="mb80 mt80 wrap">
      <h2 id='itemtitle' className="text-center"><a href="" className="text-decoration-none">지금 당장 술 담아보기</a></h2>
      <ul className="d-flex justify-content-around itemTitleBox">
        {
        props.datasrc.map((el,idx) => {
        return (         
            <li key={`li${idx}`}  
            className="d-flex flex-column align-items-center menu" 
            data-filter=".set"
            data-idx={idx}
            onClick={() => {setTabnum(idx)}}
            >
              <img src={el.imgsrc} alt="담화박스"/>
              <div className="itemTitle">{el.categorytitle}</div>
            </li>          
          )
        })                             
      }  
    </ul> 
    
    <div className="itemImgWrap ">
      <div className="itemImgWrap_margin d-flex flex-wrap ">          
        {
          props.datasrc[tabnum].productinfo.map((eel,iidx) => {
            return (
              <div className="Imgbox " key={`div${iidx}`}> {/* 카테고리에 맞게 클래스명 */}          
                <a href="">
                  <span><img src={eel.imgsrc} alt=""/></span>
                  <div className="ItemDesc">
                    <div className="productName ">{eel.productName}</div>
                    <div className="productPrice ">{eel.productPrice}</div>
                    <div className="starNum d-flex">{eel.starNum}</div>
                    <div className="desc">{eel.desc}</div>
                    {/* a태그 안에 div 태그 바꿔주세요. css 수정해야됩니다 */}
                  </div>
                </a>
            </div>
            )
          })
        }
      </div>       
    </div>                
      <button className="sooldam-btn">더보기</button>
    </section>      
  )
}

export default Product

import React from 'react'
import ProductCard from '../workroom/SH/ProductCard'

function Product(props) {
  return (
    
    <>

    <section id="itemTitle" class="mb80 mt80 wrap">
      <h2 class="text-center"><a href="" class="text-decoration-none">지금 당장 술 담아보기</a></h2>

      <ul class="d-flex justify-content-around itemTitleBox">
        <li class="d-flex flex-column align-items-center menu" data-filter=".set">
          <img src="/assets/img/soolcatecoryicon/icon_cheongju.png" alt="담화박스"/>
          <div class="itemTitle">담화박스</div>
        </li>
        <li class="d-flex flex-column align-items-center menu" data-filter=".cheongju">
          <img src="/assets/img/soolcatecoryicon/icon_cheongju.png" alt="담화박스"/>
          <div class="itemTitle">청주</div>
        </li>
        <li class="d-flex flex-column align-items-center menu" data-filter=".gwashilju">
          <img src="/assets/img/soolcatecoryicon/icon_cheongju.png" alt="담화박스"/>
          <div class="itemTitle">과실주</div>
        </li>
        <li class="d-flex flex-column align-items-center menu" data-filter=".jeungryuju">
          <img src="/assets/img/soolcatecoryicon/icon_cheongju.png" alt="담화박스"/>
          <div class="itemTitle">증류주</div>
        </li>
        <li class="d-flex flex-column align-items-center menu" data-filter=".takju">
          <img src="/assets/img/soolcatecoryicon/icon_cheongju.png" alt="담화박스"/>
          <div class="itemTitle">탁주</div>
        </li>
        <li class="d-flex flex-column align-items-center menu" data-filter=".merchandise">
          <img src="/assets/img/soolcatecoryicon/icon_cheongju.png" alt="담화박스"/>
          <div class="itemTitle">술잔</div>
        </li>
      </ul>
      
      <div class="itemImgWrap ">
        <div class="itemImgWrap_margin d-flex flex-wrap ">
          
          <ProductCard datasrc={props.datasrc}/>

        </div>
        <button>더보기</button>
      </div>

    </section>
    </>
  )
}

export default Product

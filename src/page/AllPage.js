import React from 'react'
import { useState, useEffect } from 'react';

function AllPage(props) {
  // console.log('SSH !!',props.datasrc)

  const [tap, setTap] = useState(0);
  const [a, setA] = useState(0);

  let stars = [];
  for (let i = 0; i < 4; i++) {
    //   stars.push(i) += '<span></span>';
    stars.push(i);
  }

  const colorChange = (idx) => {
    // setA((prevIndex) => (prevIndex === idx ? "" : idx)); //클릭후 같은 자리 클릭하면 다시 원상복귀되는 오류발생
    setA((prevIndex) => (prevIndex === idx ? prevIndex : idx));
  }

  return (
    <section id="itemTitle" className="mb80 mt80 wrap container" >
      <h2 className="text-center">
        <a href="#closeTop" className="text-decoration-none scrollTop">
          지금 당장 술 담아보기
        </a>
      </h2>
      <ul className="d-flex justify-content-around itemTitleBox">
        {
          props.datasrc.map((v, idx) => {
            console.log(v)
            return (
              <li className={`d-flex flex-column align-items-center itemTitle ${a === idx ? 'b' : ''}`} key={idx} onClick={() => {
                setTap(idx)
                colorChange(idx)
              }}>
                <img src={v.imgsrc} alt="담화박스" />
                <div className="itemTitle">{v.categorytitle}</div>
              </li>
            )
          })
        }
      </ul>
      <div className="itemImgWrap ">
        <div className="itemImgWrap_margin d-flex flex-wrap ">
          {
            props.datasrc[tap].productinfo && (

              props.datasrc[tap].productinfo.map((vv, i) => {
                return (
                  <div className="Imgbox gwashilju">
                    <div>
                      <a href="">
                        <img src={vv.imgsrc} alt="" />
                      </a>
                    </div>
                    <div className="ItemDesc">
                      <div className="productName "><a href="">{vv.productName}</a></div>
                      <div className="productPrice ">{vv.productPrice}</div>
                      <div className="starNum d-flex">
                        {

                          // vv.starNum
                        }
                        {/* <i class="bi bi-star-fill" key={i}>{vv.starNum}</i> */}
                        {/* {printStars(vv.starNum)} */}
                        {
                          stars.map((vvv, iii) => {
                            return (
                              <span key={iii}></span>
                            )
                          })
                        }
                      </div>
                      <p className="desc">{vv.desc}</p>
                    </div>
                  </div>

                )
              })
            )
          }
        </div>
      </div>

    </section >

  )
}

export default AllPage
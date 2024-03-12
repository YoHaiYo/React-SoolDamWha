import React from 'react'
import { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const SdhBg = styled.div`
//   background-color: #FFDF80;
//   padding-top: 2rem;
//   padding-bottom: 2rem;
// `;

export default function BestPage(props) {
  const sdhSorting = props.datasrc.item

  return (
    <>
      <div className='allpage_bg' style={{ marginTop: "250px" }}>
        <div className='allpage_container'>
          <h2 className="text-center">
            술고래들의 픽!
            <br />
            <br />
            술담화의 베스트 아이템을 만나보세요.
          </h2>
        </div>
      </div>

      <section id="bestPage" className="container" >

        <div className="itemImgWrap ">
          <div className="d-flex flex-wrap justify-content-center ">
            {sdhSorting.slice(0, 8).map((vv, i) => {
              return (
                <div className="Imgbox" key={i}>
                  <p className='rank'>{Number(i) + 1}</p>
                  <div>
                    <a href="">
                      <img src={vv.imgsrc} alt="" />
                    </a>
                  </div>
                  <div className="ItemDesc">
                    <div className="productName "><a href="">{vv.picktitle}</a></div>
                    <div className="producthashtag ">{vv.hashtag}</div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </section >
    </>

  )
}
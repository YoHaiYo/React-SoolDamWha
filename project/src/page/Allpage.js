import React from 'react'
import { useState, useEffect } from 'react';
// import styled from 'styled-components';

// const SdhBg = styled.div`
//   background-color: #FFDF80;
//   padding-top: 2rem;
//   padding-bottom: 2rem;
// `;

function AllPage(props) {
  // console.log('SSH !!',props.datasrc)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // desc: 내림차순, asc: 오름차순
  const [sortField, setSortField] = useState(''); // 기본 정렬 필드 (starNum으로 설정)

  const sdhSorting = props.datasrc
    .filter((category) => selectedCategory === '' || category.categorytitle === selectedCategory)
    .flatMap((category) => category.productinfo)
    .filter((vv) =>
      vv.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const fieldA = sortField === 'productPrice' ? parseFloat(a[sortField]) : a[sortField];
      const fieldB = sortField === 'productPrice' ? parseFloat(b[sortField]) : b[sortField];

      return sortOrder === 'desc' ? fieldB - fieldA : fieldA - fieldB;
    });


  const handleSortFieldChange = (field) => {
    setSortField(field);
  };

  return (
    <>
      <div className='allpage_bg' style={{ marginTop: "280px", marginBottom: "100px" }}>
        <div className='allpage_container'>
          <h2 className="text-center">
            담화마켓의 모든 술을 만나보세요!
          </h2>
          {/* 카테고리 선택을 위한 버튼들 */}
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <span className='allpage_box'>주종</span>
              <div className='allpage_box'>
                {props.datasrc.map((category) => (
                  <button
                    key={category.categorytitle}
                    onClick={() => setSelectedCategory(category.categorytitle)}
                    className={selectedCategory === category.categorytitle ? 'act' : ''}
                  >
                    {category.categorytitle}
                  </button>
                ))}
                {/* 전체 카테고리를 선택하는 버튼 */}
                <button
                  onClick={() => setSelectedCategory('')}
                  className={selectedCategory === '' ? 'act' : ''}
                >
                  전체 카테고리
                </button>
              </div>
            </div>
            {/* 검색창 추가 */}
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* 정렬 순서를 토글하는 버튼 */}
          <div className='d-flex'>
            <div className='allpage_box'>별점순</div>
            <div className='allpage_box'>
              <button onClick={() => {
                handleSortFieldChange('starNum');
                setSortOrder('desc')
              }}
                className={sortOrder === 'desc' && sortField === 'starNum' ? 'act' : ''}
              >
                별점높은순
              </button>
              <button onClick={() => {
                handleSortFieldChange('starNum');
                setSortOrder('asc')
              }}
                className={sortOrder === 'asc' && sortField === 'starNum' ? 'act' : ''}
              >
                별점낮은순
              </button>
            </div>
            <div className='allpage_box'>가격</div>
            <div className='allpage_box'>
              <button onClick={() => {
                handleSortFieldChange('productPrice');
                setSortOrder('asc')
              }}
                className={sortOrder === 'asc' && sortField === 'productPrice' ? 'act' : ''}
              >
                가격낮은순
              </button>
              <button onClick={() => {
                handleSortFieldChange('productPrice');
                setSortOrder('desc')
              }}
                className={sortOrder === 'desc' && sortField === 'productPrice' ? 'act' : ''}
              >
                가격높은순
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="itemTitle" className="mb80 mt80 wrap container" >

        <div className="itemImgWrap ">
          <div className="itemImgWrap_margin d-flex flex-wrap ">
            {sdhSorting.map((vv, i) => {
              return (
                <div className="Imgbox gwashilju" key={i}>
                  <div>
                    <a href="">
                      <img src={vv.imgsrc} alt="" />
                    </a>
                  </div>
                  <div className="ItemDesc">
                    <div className="productName "><a href="">{vv.productName}</a></div>
                    <div className="productPrice ">{vv.productPrice}</div>
                    <div className="starNum d-flex">
                      {Array.from({ length: vv.starNum }, (_, index) => (
                        <span key={index}></span>
                      ))}
                      {/* Array.from은 새로운 배열을 만들거나 기존의 유사배열 객체나 반복가능한 객체를 배열로 변환하는 메서드이다. */}
                    </div>
                    <p className="desc">{vv.desc}</p>
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

export default AllPage
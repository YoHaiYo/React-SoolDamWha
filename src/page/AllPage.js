import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SdhBg = styled.div`
  background-color: #FFDF80;
  padding-top: 2rem;
`;

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
      <SdhBg>
        <h2 className="text-center">
          담화마켓의 모든 술을 만나보세요!
        </h2>

        {/* 검색창 추가 */}
        <input
          type="text"
          placeholder="제품명 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 카테고리 선택을 위한 버튼들 */}
        <div>
          {props.datasrc.map((category) => (
            <button
              key={category.categorytitle}
              onClick={() => setSelectedCategory(category.categorytitle)}
            >
              {category.categorytitle}
            </button>
          ))}

          {/* 전체 카테고리를 선택하는 버튼 */}
          <button onClick={() => setSelectedCategory('')}>
            전체 카테고리
          </button>
        </div>

        {/* 정렬 순서를 토글하는 버튼 */}
        <div>
          <button onClick={() => {
            handleSortFieldChange('starNum');
            setSortOrder('desc')
          }}>
            별점낮은순
          </button>
          <button onClick={() => {
            handleSortFieldChange('starNum');
            setSortOrder('asc')
          }}>
            별점높은순
          </button>
          <button onClick={() => {
            handleSortFieldChange('productPrice');
            setSortOrder('asc')
          }}>
            가격낮은순
          </button>
          <button onClick={() => {
            handleSortFieldChange('productPrice');
            setSortOrder('desc')
          }}>
            가격높은순
          </button>
        </div>
      </SdhBg>
      <section id="itemTitle" className="mb80 mt80 wrap container" >

        <div className="itemImgWrap ">
          <div className="itemImgWrap_margin d-flex flex-wrap ">
            {sdhSorting.map((vv, i) => {
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
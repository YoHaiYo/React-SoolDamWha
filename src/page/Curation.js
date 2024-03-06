import React, { Fragment, useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const textData = [{
    title: '종합 담화박스',
    price: '₩ 39,000원',
    description: '다양한 술을 원한다면? | 막걸리, 과실주, 청주, 증류주까지 | 다양한 술을 즐길 수 있어요!|매달 다양하게 즐기고 싶은 | 애주가를 위한 패키지!',
    tags: '#큐레이션카드 #포스터 #이달의 술 3종',
    bg: 'https://i.ibb.co/gvMfg1C/image-100.jpg',
    bgcolor: '#a9d7fd',
    color: '#000'
}, {
    title: '청주 담화박스',
    price: '₩ 39,000원',
    description: '맑고 깔끔한 술맛을 원한다면? | 매월 다양한 청주를 | 선물처럼 받을 수 있어요! | 너무 쎈 알콜향은 싫지만 | 너무 음료수 같은 술도 별로라면 강추!',
    tags: '#큐레이션카드 #포스터 #이달의 청주 3종',
    bg: 'https://i.ibb.co/DYX14Nf/img.jpg',
    bgcolor: '#ffeaab',
    color: '#000'
}, {
    title: '증류주 담화박스',
    price: '₩ 39,000원',
    description: '강렬한 알콜향을 좋아하는 | 애주가를 위한 술담화 패키지! | 약한 도수에서 부터 아주 강렬한 | 도수까지 다양한 술을 즐길 수 있어요! | 소주를 좋아한다면 아주 강추!',
    tags: '#큐레이션카드 #포스터 #이달의 증류주 3종',
    bg: 'https://i.ibb.co/vYzkFFk/event3.jpg',
    bgcolor: '#b1f0f1',
    color: '#fff'
}];

//props로 전달할때 전달한 이름으로 props를 받아와야함 
function Curation({ setGudock, gudock, onDataChange}) {
    // let newData = 0;


    // useEffect(() => {
    //     onDataChange(newData)
    // }, [bringData]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 함수가 실행되도록 함


    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'zoom-in',
            once: true,
        })
    }, []);
    const handleBtnClick = () => {
        setGudock(!gudock)
    }



    return (

        <div className='CurationWrap'>
            {
                textData.map((text, idx) => {
                    return (
                        <div className='Curation d-flex mx-auto mb-5' data-aos="zoom-in">
                            <div className='CurationTexts d-flex flex-column justify-content-center' style={{ backgroundColor: text.bgcolor }}>
                                <div className='mb-5'>
                                    <strong className='text-center d-block'>{text.title}</strong>
                                    <p className='text-center price'>{text.price}</p>
                                </div>

                                <p className='desc text-center'>
                                    {
                                        text.description.split('|').map((t, i) => (
                                            <Fragment key={i}>
                                                {t}
                                                <br />
                                            </Fragment>
                                        ))
                                    }

                                </p>
                            </div>
                            <div className='CurationImg d-flex flex-column justify-content-between' style={{
                                backgroundImage: `url('${text.bg}')`
                            }}>
                                <span className='mx-3 mt-2 tag' style={{ color: text.color }}>{text.tags}</span>
                                <button className='border-0 p-2 m-3' onClick={() => {
                                    onDataChange(idx)
                                    handleBtnClick();
                                }}>구독신청하기</button>
                            </div>
                        </div >

                    )
                })
            }
        </div>
    )
}

export default Curation
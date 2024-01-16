import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

import { EffectCards } from 'swiper/modules';

export default function App({ datasrc, tap }) {
    return (
        <div id='productSwiper' className='d-sm-none m-5'>
            <Swiper
                effect={'cards'}
                loop={true}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"

            >

                {
                    datasrc[tap].productinfo && (

                        datasrc[tap].productinfo.slice(0, 8).map((vv, i) => {
                            return (
                                <SwiperSlide>
                                    <div className="Imgbox gwashilju">
                                        <div>
                                            <a href="#none">
                                                <img key={i} src={vv.imgsrc} alt="" />
                                            </a>
                                        </div>
                                        <div className="ItemDesc">
                                            <div className="productName "><a href="#none">{vv.productName}</a></div>
                                            <div className="productPrice ">{vv.productPrice}</div>
                                            <div className="starNum d-flex">
                                                {Array.from({ length: vv.starNum }, (_, index) => (
                                                    <span key={index}></span>
                                                ))}
                                                {/* Array.from은 새로운 배열을 만들거나 기존의 유사배열 객체나 반복가능한 객체를 배열로 변환하는 메서드이다. */}
                                            </div>
                                            <p className="desc" key={i}>{vv.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    )
                }



            </Swiper>
        </div>
    );
}

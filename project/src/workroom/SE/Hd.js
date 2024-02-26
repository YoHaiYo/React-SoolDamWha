import React, { useState, useEffect } from 'react'
// import Resist from './resist'
// import gnbdb from '../../data/gnb.json'
import { Link } from 'react-router-dom';






function HD(props) {
    // const scrolldown = () => {
    //     document.querySelector("#hd").classList = window.scrollY > 0 ? "fixed-top bg-white border-bottom down" : "fixed-top bg-white border-bottom";
    //     document.body.classList = window.scrollY > 0 ? " down" : "";
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", scrolldown)
    //     return () => {
    //         window.removeEventListener("scroll", scrolldown)
    //     }
    // }, [])

    return (
        <header id="hd" className='fixed-top bg-white border-bottom pb-5 pb-lg-0'>
            <div className='container row mx-auto justify-content-between justify-content-lg-center align-items-center'>
                <h1 id='Logo' className='order-lg-1'>
                    <Link to='/' className='mx-auto'></Link>
                </h1>
                <button className='d-lg-none d-block'>
                    햄버거
                </button>
                <ul id="Gnb" className='text-center justify-content-center container-lg mt-lg-5 d-lg-flex d-block order-lg-2'>
                    {
                        props.datasrc.map((v, i) => {
                            return (

                                <li key={i} className='mx-5'>
                                    {/* <a href={v.href}>{v.gnbtext}</a>  */}
                                    <Link to={`/${v.href}`}>{v.gnbtext}</Link>
                                </li>
                            )
                        })
                    }
                </ul>



                <div id='signsection' className='d-flex d-block order-lg-0 justify-content-lg-end mt-3'>
                    <ul className='d-flex'>
                        <li className='mx-3'><a href="/">로그인</a></li>
                        <li className='mx-3'><a href="/">회원가입</a></li>
                    </ul>
                    <select id="languageSelect" className=''>
                        {/* 기본선택 언어를 제일 위로 놓기 */}
                        <option value="ko">한국어</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>

        </header>


    )
}

export default HD
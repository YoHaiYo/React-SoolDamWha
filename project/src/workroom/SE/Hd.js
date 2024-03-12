import React, { useRef, useState, useEffect } from 'react'
// import Resist from './resist'
// import gnbdb from '../../data/gnb.json'
import { Link } from 'react-router-dom';






function HD(props) {
    const scrolldown = () => {
        document.querySelector("#hd").classList = window.scrollY > 0 ? "fixed-top bg-white border-bottom down" : "fixed-top bg-white border-bottom";
        document.body.classList = window.scrollY > 0 ? " down" : "";
    }
    useEffect(() => {
        window.addEventListener("scroll", scrolldown)
        return () => {
            window.removeEventListener("scroll", scrolldown)
        }
    }, [])

    const Gnbmenu = useRef("")
    const menucon = () => {
        Gnbmenu.current.classList.toggle("d-none")
    }

    return (
        <header id='hd' className='fixed-top bg-white border-bottom'>
            <div className='container row mx-auto justify-content-between justify-content-lg-center align-items-center'>
                <h1 id='Logo' className='text-center align-item-center mb-0 mt-lg-5 p-0'><Link to="/"></Link></h1>


                <i id='menuicon' className='d-lg-none d-flex p-0' onClick={menucon}><img src="https://m.scinic.com/maypop/img/icon_menu.svg" alt="메뉴" /></i>


                <div id="Gnb" ref={Gnbmenu} className='text-center container-lg mt-lg-5 d-lg-block d-none'>
                    {/* <div className='sub-logo'><img src='/assets/img/icon/sub_logo.png'></img></div> */}
                    <ul className='d-lg-flex justify-content-center'>
                        {
                            props.datasrc && props.datasrc.filter(lang => lang.gl_no === 0).map((v, i) => {
                                return (

                                    <li key={i} className='mx-5'>
                                        {/* <a href={v.href}>{v.gnbtext}</a>  */}
                                        <Link to={`/${v.gnbhref}`}>{v.gnbtext}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <ul id='Login' className='d-flex position-absolute align-items-center justify-content-center justify-content-lg-end'>
                            <li><Link to="/login">로그인</Link></li>
                            <li className='ms-lg-2'><a href="#none">회원가입</a></li>
                            <li className='ms-2'>
                                <select id="languageSelect" className='' onChange={props.setLanguage}>
                                    {/* 기본선택 언어를 제일 위로 놓기 */}
                                    <option value="ko">한국어</option>
                                    <option value="en">English</option>
                                </select>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>



        </header >


    )
}

export default HD
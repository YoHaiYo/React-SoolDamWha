import React, { useState, useEffect } from 'react'
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

    return (
        <header id="hd" className='fixed-top bg-white border-bottom'>
            <div className='text-center container-lg'>
                <h1 id='Logo'>
                    <Link to={`/`}>
                        <img src="/assets/img/icon/hd_logo.png" alt="로고" />
                        <img src="/assets/img/icon/sub_logo.png" alt="로고" />
                    </Link>
                </h1>
                <ul id="gnb" className='d-flex justify-content-center'>
                    {
                        props.datasrc.map((v, i) => {
                            return (

                                <li key={i}>
                                    {/* <a href={v.href}>{v.gnbtext}</a>  */}
                                    <Link to={`/${v.href}`}>{v.gnbtext}</Link>
                                </li>
                            )
                        })
                    }


                </ul>


                {/* <Resist></Resist> */}


            </div>
        </header>


    )
}

export default HD
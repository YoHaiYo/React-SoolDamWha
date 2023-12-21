import React from 'react'
import Resist from './resist'
import gnbdb from '../../data/gnb.json'





function HD() {
    return (
        <header id="hd" className='d-flex justify-content-center align-items-center fixed-top bg-white pt-5 border-bottom position-relative'>
            <div className='text-center container-lg'>
                <h1 id='Logo'>
                    <a href="#">
                        <img src="/assets/img/icon/hd_logo.png" alt="로고" />
                    </a>
                </h1>
                <ul id="gnb" className='d-flex justify-content-center'>
                    {
                        gnbdb.gnbko.map((v, i) => {
                            return (
                                <li key={i}><a href={v.href}>{v.gnbtext}</a></li>
                            )
                        })
                    }


                </ul>
                <Resist></Resist>


            </div>
        </header>


    )
}

export default HD

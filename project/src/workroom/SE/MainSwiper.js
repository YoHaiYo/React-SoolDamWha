import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import axios from 'axios'

// import mainS from '../../data/MainSwiper.json'
import React from 'react';


const Mains = () => {

    const [conswipe, setswipe] = useState([]);

    const swipeapi = async () => {
        try {
            const result = await axios.get('/store/ms_swiper');
            setswipe([...result.data]);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        swipeapi();
    }, [])

    return (
        <Link to={`/event`}>
            <div>
                <Swiper id='promotionSwiper' style={{ marginTop: "270px" }}
                    modules={[EffectFade, Autoplay]} effect="fade"
                    loop={true}
                    autoplay={{
                        delay: 2500,

                    }}

                    spaceBetween={50}
                    slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}

                >
                    {
                        conswipe && conswipe.map((el, idx) => {
                            return <SwiperSlide style={{
                                background: `url(${el.ms_img})`, height: "480px", backgroundSize: "auto 100%"
                            }} key={`banner${idx}`}>
                                <div className='effecttext' key={idx}>

                                    <strong>{
                                        el.ms_subject
                                    }</strong>
                                    <p>{el.ms_content.split("|").map((e, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                {e}
                                                <br />
                                            </React.Fragment>
                                        )
                                    })}</p>
                                </div >

                            </SwiperSlide >
                        })
                    }
                </Swiper >
            </div >
        </Link>
    );
};


export default Mains;
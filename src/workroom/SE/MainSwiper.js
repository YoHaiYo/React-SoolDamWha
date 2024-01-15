import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import mainS from '../../data/MainSwiper.json'
import React from 'react';


export default (props) => {
    return (
        <div>
            <Swiper id='promotionSwiper' style={{ marginTop: "0px" }}
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
                    props.datasrc.map((el, idx) => {
                        return <SwiperSlide style={{
                            background: `url(./assets/img/swiper_img/${el.background}) no-repeat center`, height: "480px", backgroundSize: "auto 100%"
                        }} key={idx}>
                            <div className='effecttext'>

                                <strong>{
                                    el.strong.split("|").map((e, i) => {
                                        return <React.Fragment>
                                            {e}
                                            <br />
                                        </React.Fragment>

                                    })
                                }</strong>
                                <p>{el.Mtext.split("|").map((e, i) => {
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
    );
};
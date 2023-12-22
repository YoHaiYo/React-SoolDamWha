import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import mainS from '../../data/MainSwiper.json'


export default (props) => {
    return (
        <div>
            <Swiper id='promotionSwiper'
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
                            background: `url(/assets/img/swiper_img/${el.background}) no-repeat center`, height: "480px", backgroundSize: "auto 100%"
                        }} key={idx}>
                            <div className='effecttext'>

                                <strong>{el.strong}</strong>
                                <p>{el.Mtext}</p>
                            </div >

                        </SwiperSlide >
                    })
                }
            </Swiper >
        </div >
    );
};
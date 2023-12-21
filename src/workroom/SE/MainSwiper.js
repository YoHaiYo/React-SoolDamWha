import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import mainS from '../../data/MainSwiper.json'










export default () => {
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
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

            >
                {
                    mainS.mainbanner.map((el, idx) => {
                        return <SwiperSlide style={{
                            background: `url(/assets/img/swiper_img/${el.background}) no-repeat center`, height: "480px", backgroundSize: "auto 100%"
                        }} key={idx}>
                            <div className='effecttext'>

                                <strong>{mainS.effecttext[idx].strong}</strong>
                                <p>{mainS.effecttext[idx].Mtext}</p>
                            </div >

                        </SwiperSlide >
                    })
                }







            </Swiper >
        </div >
    );
};
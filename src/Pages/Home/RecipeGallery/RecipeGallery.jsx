import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SwiperStyles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const RecipeGallery = () => {
    return (
        <div className='mt-10'>
            <SectionTitle
                subHeading={'Our Recipes'}
                heading={'Gallery'}
            >
            </SectionTitle>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://i.ibb.co/SmvYqX9/sushi-set-table.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nMm6rwW/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/5hgBvbs/some-tale-Su-Tte-jx-YE-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/Tqsgq7s/some-tale-IGe6-IV7-S-IU-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/vz71KrH/dose-juice-j-YWo-V-uz-Rw-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/RbLqk6P/brooke-lark-DMp-Yt-kfq-L4-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/HFzN4GK/alexandra-gorn-kge-O6g-OZsh-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/9gCy2cB/brooke-lark-k-VCRP3ui-Li-E-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nP4pSKh/b540723e-c068-4821-9a3c-3f14a602b918.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BBBhTpV/14.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nP4pSKh/b540723e-c068-4821-9a3c-3f14a602b918.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/RbLqk6P/brooke-lark-DMp-Yt-kfq-L4-unsplash.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default RecipeGallery;
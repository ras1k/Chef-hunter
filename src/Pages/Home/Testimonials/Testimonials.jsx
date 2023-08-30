import { useEffect, useState } from 'react';
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-three-omega.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#422006',
        inactiveFillColor: '#fed7aa'
      }
    return (
        <div>
            {/* <SectionTitle
                subHeading={'What out client say'}
                heading={'Testimonials'}
            ></SectionTitle> */}
            <div className='text-center'>
                <h2 className='lg:text-5xl bg-yellow-950 w-2/5 pt-2 pb-2 rounded-lg text-white font-bold mx-auto mt-10'>What Our Clients Say</h2>
            </div>
            <div className='my-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col items-center p-20'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    itemStyles={myStyles}
                                    readOnly
                                    className='mb-4'
                                />
                                <FaQuoteLeft size={100} className=''/>
                                <p className='my-8'>{review.details}</p>
                                <h3 className='text-xl text-yellow-950'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
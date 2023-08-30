
import img from '../../../assets/featured.jpg'
import moment from 'moment';
import './Featured.css'
import Tilt from 'react-parallax-tilt';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div className="mt-5 mb-10 featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 lg:px-36'>
                <Tilt>
                    <img src={img} alt="" className='w-full p-2 lg:p-0' />
                </Tilt>
                <div className='lg:ml-10 mt-2 px-2 lg:p-0'>
                    <p>{moment().format('MMMM Do, YYYY')}</p>
                    <p>Where can i get some?</p>
                    <p>Discover culinary delight with our chef&apos;s exquisite recipe. Melding premium ingredients into a symphony of flavors, this dish is a masterpiece. Succulent cuts of prime meat are delicately seasoned, seared to perfection, and paired with a velvety reduction. Vibrant, farm-fresh vegetables add a burst of color and nutrients. Garnished with aromatic herbs, this creation tantalizes the senses, transcending mere sustenance into an unforgettable gastronomic experience. Elevate your dining with this culinary triumph.</p>
                    <button className=' text-white mt-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
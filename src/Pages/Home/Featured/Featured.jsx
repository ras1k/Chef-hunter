
import img from '../../../assets/featured.jpg'
import moment from 'moment';
import './Featured.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div className="mt-5 mb-10 featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 lg:px-36'>
                <div>
                    <img src={img} alt="" className='w-full' />
                </div>
                <div className='lg:ml-10 mt-2'>
                    <p>{moment().format('MMMM Do, YYYY')}</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio non minus distinctio quae, harum reprehenderit quisquam provident nulla dignissimos! Ab, vel quasi? Reiciendis iste, ipsam et harum eos, est laborum, magni doloremque omnis error itaque. Odit, harum officiis? Eaque rerum tempore aspernatur neque? Ab harum recusandae saepe, tempore mollitia soluta.</p>
                    <button className=' text-white mt-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
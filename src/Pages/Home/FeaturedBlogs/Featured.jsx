import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css';

import img1 from '../../../assets/brooke-lark-4J059aGa5s4-unsplash.jpg'
import img2 from '../../../assets/brooke-lark-HlNcigvUi4Q-unsplash.jpg'
import img3 from '../../../assets/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg'
import img4 from '../../../assets/lily-banse--YHSwy6uqvk-unsplash.jpg'


const FeaturedBlogs = () => {
    return (
        <div className='mb-20 mt-20'>
            <SectionTitle
                subHeading={'Featured'}
                heading={'Blogs'}
            >
            </SectionTitle>
            <div className="section lg:flex gap-5">
                <div className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src={img1} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Healthy Food</h2>
                        <p>
                            Savor the artistry of delectable dishes, each bite a journey through rich textures and harmonious tastes, celebrating food&apos;s wonders....</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src={img2} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Breakfast should be healthy</h2>
                        <p>
                            Greet the morning with a breakfast symphony - golden pancakes, crispy bacon, and sun-kissed eggs, a melody of flavors that awakens the day. ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src={img3} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fruits are natural medicine</h2>
                        <p>

                            Nature&apos;s jewels, fruits adorn our world with a rainbow palette and a burst of flavors. From the juicy sweetness of berries to the tropical tang of citrus, each bite is a celebration of vitality and taste. ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src={img4} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Steak Dinner for you</h2>
                        <p>

                            Indulge in the epitome of carnivorous delight – succulent steaks, seared to perfection, releasing a symphony of aromas and delivering a melt-in-your-mouth experience. ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default FeaturedBlogs;
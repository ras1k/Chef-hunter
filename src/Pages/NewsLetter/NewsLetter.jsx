import { AiOutlineSend } from "react-icons/ai";
import img from '/logo.png'
import Tilt from 'react-parallax-tilt';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const NewsLetter = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'Subscribe To Our'}
                heading={'Newsletter'}
            >
            </SectionTitle>
            <div className="hero mb-20 mt-10 rounded-lg">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="md:text-5xl font-bold">Subscribe To Our NewsLetter</h1>
                        <p className="py-6">We will send you updates about our new chef.</p>
                        <div className="flex items-center justify-center lg:justify-normal">
                            <div className="form-control me-4 ">
                                <input type="text" placeholder="email" className="input input-bordered lg:w-[300px]" />
                            </div>
                            <div className="form-control">
                                <button className="btn btn-sm md:btn-md btn-outline bg-yellow-950 text-white">Subscribe <AiOutlineSend /></button>
                            </div>
                        </div>
                    </div>
                    <Tilt className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <img src={img} alt="" className='w-4/5 rounded-lg lg:w-full' />

                    </Tilt>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;
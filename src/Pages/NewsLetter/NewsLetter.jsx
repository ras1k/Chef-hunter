import { AiOutlineSend } from "react-icons/ai";
import img from '/logo.png'

const NewsLetter = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='lg:text-5xl bg-yellow-950 w-2/5 pt-2 pb-2 rounded-lg text-white font-bold mx-auto mt-10'>News Letter</h2>
            </div>
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
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <img src={img} alt="" className='w-4/5 rounded-lg lg:w-full' />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsLetter;
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import img from '/logo.png'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [messageError, setMessageError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const all = { name, email, password, photo };
        console.log(all);
        setMessageError("");
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photo);
                navigate('/');
                form.reset();
            })
            .catch(error => {
                console.log(error)
                const errorMessage = error.message;
                setMessageError(errorMessage)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 bg-yellow-950 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center text-white">Signup</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URl</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                </div>
                                <p className='text-[red] mt-6 text-center'>{messageError}</p>
                                <div className="form-control mt-6">
                                    <input className="btn btn-sm md:btn-md btn-outline hover:bg-white hover:text-black text-slate-200 btn-neutral" type="submit" value="Sign Up" /> <br />
                                    
                                    <br />
                                    <p className='my-4 text-center text-white'>Already have an account? <Link to='/login' className='no-underline text-orange-600 font-bold'>Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
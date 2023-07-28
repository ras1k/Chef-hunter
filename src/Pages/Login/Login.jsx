import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import img from '/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useState } from 'react';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [messageError, setMessageError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(errorCode);
                setMessageError(errorCode);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 text-center lg:w-2/5">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-yellow-950 text-white">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="text" name='email' required placeholder="Email" className="input input-bordered text-black" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="Password" className="input input-bordered text-black" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-white mt-2">Forgot password?</a>
                                    </label>
                                    <p className='text-red-600'>
                                        {messageError}
                                    </p>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-sm md:btn-md btn-outline hover:bg-white hover:text-black text-slate-200 btn-neutral" type="submit" value="Login" /> <br />
                                    <SocialLogin />
                                    <p className='my-4 text-center'>New Here? <Link to='/signup' className='no-underline text-orange-600 font-bold'>Signup</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
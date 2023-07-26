
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <div>
            <div className="divider text-white">OR</div>
            <hr />
            <div className='text-center mt-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle bg-white me-4 btn-outline">
                    <FcGoogle />
                </button>
                <button onClick={handleGithubSignIn} className="btn btn-circle bg-white btn-outline">
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
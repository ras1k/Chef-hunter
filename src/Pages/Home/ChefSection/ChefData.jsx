
import { useContext } from "react";
import { AiFillLike, AiOutlineArrowRight } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import Tilt from 'react-parallax-tilt';

const ChefData = ({ chef }) => {

    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, id } = chef;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleViewRecipe = () => {
        if(user){
            navigate(`/recipe/${id}`)
        } 
        else {
            Swal.fire({
                title: 'Please login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#422006',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <Tilt className="card card-compact lg:w-96 sm:w-80  bg-base-100 shadow-xl mx-auto">
            <figure className="">
                <img className='' src={chef_picture} alt="Chef" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-yellow-950 font-[600]">{chef_name}</h2>
                <p>Experience: {years_of_experience}</p>
                <p>Numbers of recipes: {num_recipes}</p>
                <p className="flex items-center gap-4 text-yellow-950"> <span><AiFillLike /></span>  <span>Likes *{likes}k</span></p>
                <div className="card-actions mt-3">
                    <button onClick={() => handleViewRecipe(id)} className="bg-yellow-950 text-[white] btn-outline btn-md flex items-center gap-4"><span>View Recipes</span> <span><AiOutlineArrowRight /></span></button>
                </div>
            </div>
        </Tilt>
    );
};

export default ChefData;
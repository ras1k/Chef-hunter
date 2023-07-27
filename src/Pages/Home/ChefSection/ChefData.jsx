
import { AiFillLike, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ChefData = ({ chef }) => {

    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, id } = chef;

    return (
        <div className="card card-compact lg:w-96 sm:w-80  bg-base-100 shadow-xl">
            <img className='rounded-t-lg' src={chef_picture} alt="Chef" />
            <div className="card-body">
                <h2 className="card-title text-yellow-950 font-[600]">{chef_name}</h2>
                <p>Experience: {years_of_experience}</p>
                <p>Numbers of recipes: {num_recipes}</p>
                <p className="flex items-center gap-4 text-yellow-950"> <span><AiFillLike /></span>  <span>Likes *{likes}k</span></p>
                <div className="card-actions mt-3">
                    <Link to={`/recipe/${id}`}><button className="bg-yellow-950 text-[white] btn-outline btn-md flex items-center gap-4"><span>View Recipes</span> <span><AiOutlineArrowRight /></span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefData;
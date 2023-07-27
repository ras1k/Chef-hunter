import { AiFillLike, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ChefData = ({ chef }) => {

    const { chef_picture, chef_name, years_of_experience, num_recipes, rating, id } = chef;
    return (
        <div className="card card-compact lg:w-96 sm:w-80  bg-base-100 shadow-xl">
            <figure><img className='' src={chef_picture} alt="Chef" /></figure>
            <div className="card-body">
                <h2 className="card-title text-yellow-950 font-[600]">{chef_name}</h2>
                <p>Experience: {years_of_experience}</p>
                <p>Numbers of recipes: {num_recipes}</p>
                <p className="flex items-center gap-4 text-yellow-950"> <span><AiFillLike /></span>  <span>Likes *{rating}k</span></p>
                
            </div>
        </div>
    );
};

export default ChefData;
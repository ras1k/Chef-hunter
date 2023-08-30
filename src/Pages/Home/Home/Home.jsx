import Chef from "../ChefSection/CHef";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import Testimonials from "../Testimonials/Testimonials";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
        <div>
            <div className="w-full">
                <Banner />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <Chef />
                <RecipeGallery />
                <Featured />
                <Testimonials />
                <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
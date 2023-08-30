import Chef from "../ChefSection/CHef";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import RecipeGallery from "../RecipeGallery/RecipeGallery";


const Home = () => {
    return (
        <div>
            <div className="w-full">
                <Banner />
            </div>
            <div className="max-w-screen-xl mx-auto">
                <Chef />
                <RecipeGallery />
                <NewsLetter />
            </div>
        </div>
    );
};

export default Home;
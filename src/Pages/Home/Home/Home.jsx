import Chef from "../ChefSection/CHef";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import RecipeGallery from "../RecipeGallery/RecipeGallery";


const Home = () => {
    return (
        <div>
            <Banner />
            <Chef />
            <RecipeGallery />
            <NewsLetter />
        </div>
    );
};

export default Home;
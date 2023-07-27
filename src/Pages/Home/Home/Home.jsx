import Chef from "../ChefSection/CHef";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import RecipeBar from "../RecipeBar/RecipeBar";


const Home = () => {
    return (
        <div>
            <Banner />
            <Chef />
            <RecipeBar />
            <NewsLetter />
        </div>
    );
};

export default Home;
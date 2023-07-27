import Chef from "../ChefSection/CHef";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import Location from "../Location/Location";


const Home = () => {
    return (
        <div>
            <Banner />
            <Chef />
            <Location />
            <NewsLetter />
        </div>
    );
};

export default Home;
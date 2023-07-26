import NewsLetter from "../NewsLetter/NewsLetter";
import logo from '/logo.png';

const About = () => {
    return (
        <div className="p-4">
            <div className="bg-gray-100 min-h-screen rounded-lg">
                <div className="py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold text-center mb-8">About Chef Advisor</h1>
                        <p className="text-center text-gray-600">
                            Chef Advisor is your go-to platform for finding the best chefs from around the world.
                            We connect talented chefs with restaurants and food establishments looking for culinary excellence.
                        </p>
                        <div className="mt-12 flex justify-center">
                            <img src={logo} alt="" className="w-1/2 rounded-lg" />
                        </div>
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                At Chef Advisor, we are committed to revolutionizing the culinary industry by connecting
                                passionate chefs with exciting opportunities and helping restaurants discover their next
                                culinary superstar.
                            </p>
                        </div>
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
                            {/* Add team member profiles here */}
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </div>
    );
};

export default About;
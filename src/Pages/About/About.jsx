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
                        Chef Hunter is the premier platform for uncovering exceptional chefs globally. Our seamless platform connects talented culinary artists with top restaurants and food establishments, forging a path towards unparalleled excellence. Discover a world of culinary brilliance and elevate your dining experience with our carefully curated selection of top-tier chefs.
                        </p>
                        <div className="mt-12 flex justify-center">
                            <img src={logo} alt="" className="w-1/2 rounded-lg" />
                        </div>
                        <div className="mt-12 p-4">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                At Chef Advisor, we are passionate about bringing the finest culinary talents to the spotlight. Our platform serves as the ultimate destination for chefs, restaurants, and food establishments alike, as we connect skilled culinary artists with exciting opportunities and discerning food lovers.
                                <h4 className="text-xl mt-2">Discover Your Culinary Stars:</h4>
                                Are you in search of the perfect chef to elevate your restaurants dining experience? Look no further! Chef Advisor presents a diverse pool of talented chefs from around the globe, each with their unique expertise and culinary flair. Whether you need a master of French cuisine, a sushi virtuoso, or a pastry prodigy, our platform showcases a treasure trove of culinary stars waiting to shine in your kitchen.

                                <h4 className="text-xl mt-2">Empowering Culinary Careers:</h4>
                                For aspiring and established chefs, Chef Advisor is the gateway to a world of new possibilities. Our platform not only helps you find your dream culinary job but also provides access to invaluable resources, mentorship opportunities, and a community of passionate food enthusiasts. We believe that every culinary artist deserves the chance to showcase their talent and contribute to the gastronomic worlds ever-evolving landscape.

                                <h4 className="text-xl mt-2">Culinary Adventure Awaits:</h4>
                                Join us on a culinary adventure like no other! Explore a vast collection of chef profiles, each telling a unique story of dedication, creativity, and passion for gastronomy. Dive into the rich tapestry of cuisines, techniques, and flavors from various cultures, all brought together under the banner of Chef Advisor. Prepare to be inspired, tantalized, and amazed by the extraordinary talents that our platform showcases.

                                <h4 className="text-xl mt-2">Community and Collaboration:</h4>
                                At Chef Advisor, we celebrate the power of collaboration. Our platform fosters a vibrant community where chefs, restaurant owners, and food enthusiasts can connect, share ideas, and collaborate on exciting culinary projects. Whether youre a food blogger seeking a guest chef for an event or a restaurant owner looking to expand your team, Chef Advisors collaborative spirit ensures that your culinary vision becomes a reality.

                                <h4 className="text-xl mt-2">Embrace the Journey:</h4>
                                Embrace the journey of culinary exploration with Chef Advisor. From innovative pop-up restaurants to Michelin-starred kitchens, we provide a window into the vibrant world of culinary arts. Let us guide you on a gastronomic quest where passion, creativity, and exceptional talent combine to create extraordinary dining experiences.
                                <br /> <br />
                                Join Chef Advisor today and unlock a world of culinary wonders. Whether youre seeking a culinary prodigy or ready to make your mark as a talented chef, were here to celebrate the artistry of food with you. Together, well shape the future of gastronomy, one delectable dish at a time. Let the culinary adventure begin!
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
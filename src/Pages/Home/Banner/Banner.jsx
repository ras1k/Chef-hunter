import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./styleFile.css";

const content = [
    {
        title: "Garden Chef",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: "https://i.ibb.co/vXJ1vh9/priscilla-du-preez-JCZ2p-E-Szpw-unsplash.jpg"
    },
    {
        title: "Salad Chef",
        description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: "https://i.ibb.co/tBxkYXv/ca-creative-8-Tlng54n8-Y-unsplash.jpg"
    },
    {
        title: "Head Chef",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://i.ibb.co/pP3Yj02/fabrizio-magoni-boa-Dpm-C-Xo-unsplash.jpg"
    }
];

const Banner = () => {
    return (
        <div className="mt-2 mb-4">
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div> 
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;




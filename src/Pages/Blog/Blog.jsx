import React from "react";
import Pdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className='text-center'>
                <h2 className='lg:text-5xl bg-yellow-950 w-2/5 pt-2 pb-2 rounded-lg text-white font-bold mx-auto mt-10 mb-10'>Blog Page</h2>
            </div>
            <div className="text-center mb-4">
                <Pdf targetRef={ref} filename="blogs.pdf">
                    {({ toPdf }) => <button onClick={toPdf}><span className="flex gap-2 items-center">Generate Pdf <span><FaDownload /></span></span></button>}
                </Pdf>
            </div>
            <div className="lg:ps-80 md:ps-64">
                <div ref={ref} className="">
                    <div className="mt-4 mb-4">
                        <h3 className="text-2xl font-semibold lg:w-4/6">
                            #1 What is the differences between uncontrolled and controlled components?
                        </h3>
                        <p className="p-2 lg:w-4/6">
                            Components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components are components that manage their own state internally
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold lg:w-4/6">
                            #2 How to validate React props using PropTypes?
                        </h3>
                        <p className="p-2 lg:w-4/6">
                            To validate React props, we need prop-types package. It helps catch bugs by defining types and requirements for component props. First, install prop-types. Then, import it into your component file. Create a propTypes object where we define types for props. Use PropTypes with various types like string, number, bool, func, and shape to specify expectations. Marking props as isRequired ensures they must be present. React will show warnings if prop types dont match.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold lg:w-4/6">
                            #3 What is the difference between nodejs and express js?
                        </h3>
                        <p className="p-2 lg:w-4/6">
                            Node.js and Express.js are web development technologies. Node.js is a runtime environment enabling server-side JavaScript execution outside browsers, on the other hand, Express is a framework that sits on top of Node.js. Its super helpful for making web apps and APIs without much hassle. It got these middleware things to process HTTP requests, easy route handling, and some templating options if youre into that stuff. Together, they make a dream team for building powerful server-side apps and APIs. Devs love using both to create robust web stuff with ease.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold lg:w-4/6">
                            #4 What is a custom hook, and why will you create a custom hook?
                        </h3>
                        <p className="p-2 lg:w-4/6">
                            Custom hooks are reusable functions in React to manage stateful logic between components. When we need to import same thing in a lot of files. Its easy to make and lessens code and importing. I will create custom hooks because it reuses stateful logic between React components, making development more efficient and maintaining cleaner, modular code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
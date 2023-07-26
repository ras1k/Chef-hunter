
const Blog = () => {
    return (
        <div className="p-8">
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-bold">
                    #1 What is the differences between uncontrolled and controlled components?
                </div>
                <div className="collapse-content">
                    <p className="p-2">Pomponents that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components are components that manage their own state internally</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    #3 What is the difference between nodejs and express js?
                </div>
                <div className="collapse-content">
                    <p className="p-2">Node.js and Express.js are web development technologies. Node.js is a runtime environment enabling server-side JavaScript execution outside browsers, on the other hand, Express is a framework that sits on top of Node.js. Its super helpful for making web apps and APIs without much hassle. It got these middleware things to process HTTP requests, easy route handling, and some templating options if youre into that stuff. Together, they make a dream team for building powerful server-side apps and APIs. Devs love using both to create robust web stuff with ease.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    #2 How to validate React props using PropTypes?
                </div>
                <div className="collapse-content">
                    <p className="p=2">To validate React props, we need prop-types package. It helps catch bugs by defining types and requirements for component props. First, install prop-types. Then, import it into your component file. Create a propTypes object where we define types for props. Use PropTypes with various types like string, number, bool, func, and shape to specify expectations. Marking props as isRequired ensures they must be present. React will show warnings if prop types dont match.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                    #4 What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content">
                    <p className="p-2">Custom hooks are reusable functions in React to manage stateful logic between components. When we need to import same thing in a lot of files. Its easy to make and lessens code and importing. I will create custom hooks because it reuses stateful logic between React components, making development more efficient and maintaining cleaner, modular code. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
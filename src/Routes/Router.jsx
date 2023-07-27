import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import ViewRecipe from "../Pages/ViewRecipe/ViewRecipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: '/recipe/:id',
                element: <ViewRecipe></ViewRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
]);

export default router;
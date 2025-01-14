
import MainLayout from '../layouts/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
import Cart from '../pages/Cart';
const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [{
        index: true,
        element: <Home />
    },
    {
        path: "about-us",
        element: <AboutUs />
    },
    {
        path: "categories",
        element: <Categories />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
            if (typeof params.prefix !== "string" || !/^[a-z]+$/.test(params.prefix)) {
                throw new Response("Bad Request", {
                    statusText: "Category not found",
                    status: 400
                })
            }
            return true
        }
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    }
    ]
}])

export default function AppRouter() {
    return (
        <RouterProvider router={router} />

    )
}

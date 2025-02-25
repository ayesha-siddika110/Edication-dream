import { createBrowserRouter } from "react-router-dom"
import Root from "../Root/Root"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"
import AboutUs from "../Pages/AboutUs/AboutUs"
import Instructors from "../Pages/Instructors/Instructors"
import ContactUs from "../Pages/ContactUs/ContactUs"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Students from "../Pages/Student/Students"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import Pages from "../Pages/Pages/Pages.jsx"
import Categories from '../Pages/Pages/Categories.jsx';
import DetailsPage from '../pages/Pages/DetailsPage.jsx';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/aboutUs',
                element: <ProtectedRoute>
                    <AboutUs />
                </ProtectedRoute>
            },
            {
                path: '/instructors',
                element: <Instructors />,
                loader: () => fetch('/instructors.json')
            },
            {
                path: 'students',
                element: <Students />
            },
            {
                path: '/blog',
                element: <ContactUs />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/pages",
                element: <Pages></Pages>,
                loader: () => fetch('../category.json'),
                children: [
                  {
                    path: "/pages/:category",
                    element: <Categories></Categories>,
                    loader: ()=> fetch("../pages.json")
                    
                  }
                ]
              },
              {
                path: "/details/:detailId",
                element: <DetailsPage></DetailsPage>,
                loader: ()=> fetch("../pages.json")
        
              },
        ]
    }
])



export default Router
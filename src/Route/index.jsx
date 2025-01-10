import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "@/HomePage";
import Signup from "@/UserSignup";
import LoginUser from "@/userLogin";
import AllUnitPages from "@/Allpages";
import SnackFoods from "@/Snacks";
import HelloFoodies from "@/zee";
import MoreFoodCollections from "@/MoreStores";
import AboutFoodDetails from "@/addToCart";
import SingleItem from "@/linkToMealsInformation/SingleItem";
import Carts from "@/userCart/Carts";


export const rootRoute = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <LoginUser />
    },
    {
        path: "/home",
        element: <AllUnitPages />
    },
    {
        path: "/collections",
        element: <MoreFoodCollections />,
    },
    {
        path: "/africa-food",
        element: <SnackFoods />,
    },
    {
        path: "/meal-details",
        element: <SingleItem />
    },
    {
        path: "/table-meal",
        element: <HelloFoodies />
    },
    {
        path: "/food-details",
        element: <AboutFoodDetails />
    },
    // {
    //     path: "/details",
    //     element: <CollectInfoOnFood />
    // },
    {
        path: "/cart",
        element: <Carts />
    }

])
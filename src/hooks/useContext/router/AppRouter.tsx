import {createBrowserRouter, Navigate} from "react-router";
import {AboutPage} from "@/hooks/useContext/pages/About.tsx";
import {LoginPage} from "@/hooks/useContext/pages/Login.tsx";
import {ProfilePage} from "@/hooks/useContext/pages/Profile.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element:<div> HelloWorld </div>,
    },
    {
        path: "/about",
        element:<AboutPage></AboutPage>,
    },
    {
        path: "/login",
        element:<LoginPage></LoginPage>,
    },
    {
        path: "/profile",
        element:<ProfilePage></ProfilePage>,
    },
    {
        path: "*",
        element:<Navigate to={"/"}/>,
    },
]);

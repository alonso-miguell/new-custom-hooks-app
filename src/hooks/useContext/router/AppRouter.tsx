import {createBrowserRouter, Navigate} from "react-router";
import {AboutPage} from "@/hooks/useContext/pages/About.tsx";
import {LoginPage} from "@/hooks/useContext/pages/Login.tsx";
import {ProfilePage} from "@/hooks/useContext/pages/Profile.tsx";
import {PrivateRoute} from "@/hooks/useContext/router/PrivateRoute.tsx";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element:<AboutPage></AboutPage>,
    },
    {
        path: "/login",
        element:<LoginPage></LoginPage>,
    },
    {
        path: "/profile",
        // element:<ProfilePage></ProfilePage>,
        element: <PrivateRoute element={<ProfilePage/>}></PrivateRoute>
    },
    {
        path: "*",
        element:<Navigate to={"/"}/>,
    },
]);

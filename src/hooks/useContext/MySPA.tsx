import {RouterProvider} from "react-router";
import {AppRouter} from "@/hooks/useContext/router/AppRouter.tsx";

export const HomePage = () => {

    return (
        <div className="bg-gradient flex flex-col gap-4">

            <div className="flex flex-col items-center justify-center min-h-screen">
                <RouterProvider router={AppRouter} ></RouterProvider>
            </div>
        </div>
    );
};
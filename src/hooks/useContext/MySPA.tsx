import {RouterProvider} from "react-router";
import {AppRouter} from "@/hooks/useContext/router/AppRouter.tsx";
import {UserContextProvider} from "@/hooks/useContext/UserContextProvider.tsx";

export const HomePage = () => {

    return (
        <UserContextProvider>
            <div className="bg-gradient flex flex-col gap-4">

                <div className="flex flex-col items-center justify-center min-h-screen">
                    <RouterProvider router={AppRouter}></RouterProvider>
                </div>
            </div>
        </UserContextProvider>
    );
};
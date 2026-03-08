import {Button} from "@/components/ui/button.tsx";
import {useContext} from "react";
import {UserContext} from "@/hooks/useContext/UserContextProvider.tsx";

export const ProfilePage = () => {

    const {isAuthenticated, user} = useContext(UserContext);

    const handleLogout = () => {
        console.log("Logout");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">Profile page</h1>
            <hr/>

            <pre className="my-4 w-[80%] overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>

            <Button variant="destructive" onClick={handleLogout}
            >
                Salir
            </Button>
        </div>
    );
};
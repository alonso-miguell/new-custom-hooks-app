import {Button} from "@/components/ui/button.tsx";
import {useContext} from "react";
import {UserContext} from "@/hooks/useContext/UserContextProvider.tsx";
import {Link} from "react-router";

export const ProfilePage = () => {

    const {handleLogout, user} = useContext(UserContext);

    const handleLogoutClick = () => {
        handleLogout();
        localStorage.removeItem("userId");
        console.log("Logout");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl">Profile page</h1>
            <hr/>

            <pre className="my-4 w-[80%] overflow-x-auto">
        {JSON.stringify(user, null, 2)}
      </pre>

            <div className="flex flex-col gap-2">
                <Link to="/about" className="hover:text-blue-500 underline text-2xl">
                    About
                </Link>
            </div>
            <Button variant="destructive" className="bg-red-800 hover:bg-slate-700 text-white px-4" onClick={handleLogoutClick}
            >
                Salir
            </Button>


        </div>
    );
};

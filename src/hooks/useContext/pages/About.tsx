import {use, useContext} from "react";
import {Button} from "@/components/ui/button.tsx";
import {UserContext} from "@/hooks/useContext/UserContextProvider.tsx";
import {Link} from "react-router";

export const AboutPage = () => {

    /**
     * Seems like we can use instead of useContext in the same way.
     * use is more flexible since it can be used outside hooks and
     * in conditions or loops.
     */
    // const { isAuthenticated, handleLogout} = useContext(UserContext);
    const {isAuthenticated, handleLogout} = use(UserContext);
    console.log(isAuthenticated);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">About</h1>

            <hr/>

            {/* Perfil de usuario si tiene sesión */}
            {isAuthenticated && (
                <div className="flex flex-col gap-2">
                    <Link
                        to="/profile"
                        className="hover:text-blue-500 underline text-2xl"
                    >
                        Perfil

                    </Link>
                </div>
            )}

            {/* Login logout */}
            {isAuthenticated ? (
                <Button variant="destructive" className="mt-4" onClick={handleLogout}>

                    Salir
                </Button>
            ) : (
                <div className="flex flex-col gap-2">
                    <Link to="/login" className="hover:text-blue-500 underline text-2xl">
                        Iniciar sesión
                    </Link>
                </div>
            )}

        </div>
    );
};
import {useContext} from "react";
import {Link} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {UserContext} from "@/hooks/useContext/UserContextProvider.tsx";

export const AboutPage = () => {

    const { isAuthenticated, user, handleLogout} = useContext(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">About</h1>
            <hr />

            <div className="flex flex-col gap-2">
                {/* Perfil de usuario si tiene sesión */}
                {isAuthenticated && (
                    <Link
                        to="/profile"
                        className="hover:text-blue-500 underline text-2xl"
                    >
                        Perfil
                        {/*{user}*/}
                    </Link>
                )}

                {/* Login logout */}
                {isAuthenticated ? (
                    <Button variant="destructive" className="mt-4" onClick={handleLogout}>

                        Salir
                    </Button>
                ) : (
                    <Link to="/login" className="hover:text-blue-500 underline text-2xl">
                        Iniciar sesión
                    </Link>
                )}
            </div>
        </div>
    );
};
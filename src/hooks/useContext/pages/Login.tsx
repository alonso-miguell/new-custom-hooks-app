import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "@/hooks/useContext/UserContextProvider.tsx";
import {Link, useNavigate} from "react-router";

export const LoginPage = () => {

    //we unwrap handleLogin and user from the context
    const {handleLogin, user}=useContext(UserContext);

    const [userId,setUserId]=useState<string>('');

    //used for local navigation
    const navigator=useNavigate();

    const handleSubmit= (e: React.SubmitEvent)=>{
        e.preventDefault();
        const result=handleLogin(Number.parseInt(userId));

        if(result){
            console.log(user);
            //specify where to anvigate without refreshing the page
            navigator("/profile");
        }
        else{

            console.log("can't find user");
            setUserId('');

        }

    }

    useEffect(() => {
        if(localStorage.getItem('userId')){
            navigator("/profile");
        }
    });

    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
            <hr />

            <form className="flex flex-col gap-2 my-10" onSubmit={ handleSubmit}>
                <Input
                    type="number"
                    placeholder="ID del usuario"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />

                <Button type="submit">Login</Button>
            </form>

            <Link to="/about">
                <Button variant="ghost">Volver a la página principal</Button>
            </Link>
        </div>
    );
};
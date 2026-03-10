import {UserContext} from "@/hooks/useContext/UserContextProvider.tsx";
import {JSX, use} from "react";
import {Navigate} from "react-router";

//For this we can use any of this
interface props {
    element: React.ReactNode
    // element: JSX.Element
}

/**
 * We created this PrivateRoute handler to protect the
 * profile page of being accesed if we don't have an user
 * in the current context, for this we need to pass the element
 * which (is the current profile view/component) and must be a
 *  - JSX
 *  - Or React.ReactNode
 *
 *  Depedning on it we access the elment or navigate to /login
 * @param element
 * @constructor
 */

export const PrivateRoute = ({element}: props) => {
    const {isAuthenticated}=use(UserContext);

    if(isAuthenticated){
        return element;
    }

    //using replace to Whether to replace the current entry in the browser history
    return (<Navigate to="/login" replace> </Navigate> );

}
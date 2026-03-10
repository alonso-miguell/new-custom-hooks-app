import {type User, users} from "@/hooks/useContext/data/user.mock.data.tsx";
import {createContext, type PropsWithChildren, useState} from "react";


/**
 * Context is used to avoid Prop drilling
 *
 * Prop drilling is when you pass props through multiple intermediate components
 * that don't need them, just to get data to a deeply nested component.
 *
 * // Data needs to reach <Avatar>, but passes through components that don't use it
 * <App user={user}>               // has user
 *   <Layout user={user}>          // doesn't need user, just passes it
 *     <Navbar user={user}>        // doesn't need user, just passes it
 *       <Avatar user={user} />    // finally uses it
 *     </Navbar>
 *   </Layout>
 * </App>
 *
 * Layout and Navbar don't care about user — they're just middlemen.
 *
 * Solutions:
 *
 * Context → most common fix
 * State managers like Redux, Zustand
 * Component composition (passing components as children instead of data)
 */

// Define context Props
interface UserContextProps {
    user: User | null;
    isAuthenticated: boolean;
    handleLogin: (userId: number) => boolean;
    handleLogout: () => void;
}

/**
 * This is the actual context that will be used for the components and where
 * the provider will push the values according to the props
 *
 * The provider is just the SOURCE for the context
 */
export const UserContext = createContext<UserContextProps>({} as UserContextProps);


/**
 * children is a param to indicate that the component will have or
 * can contain other children components. So when creating the component
 * this components should include the other components in hierarchy
 * <MyComponentWithChildren>
 *     <Child1/>
 *     <Child2/>
 * </MyComponentWithChildren>
 *
 * PropsWithChildren is used PropsWithChildren adds the children prop
 * to your component's props type
 * @param children
 * @constructor
 */
export const UserContextProvider = ({children}: PropsWithChildren) => {

    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleLogin = (userId: number) => {
        const loggedUser = users.find((user) => user.id === userId);

        if (loggedUser) {
            setUser(loggedUser);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(loggedUser));
            return true;
        }

        setUser(null);
        setIsAuthenticated(false);
        return false;
    }

    const handleLogout = () => {
        localStorage.removeItem('user');

        setUser(null);
        setIsAuthenticated(false);
    }

    //We create a initialContext which includes every prop
    const initialContext: UserContextProps = {
        user,
        isAuthenticated,
        handleLogin,
        handleLogout,
    }

    /**
     *     Here we return the variable UserContext with the values from the provider
     *     and at the same time we pass the children components
     */
    return (
        <UserContext value={initialContext}>
            {children}
        </UserContext>);
}

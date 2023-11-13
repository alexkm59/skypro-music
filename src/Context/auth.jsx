import React, {useContext} from "react"

export const authContext = React.createContext({
    authenticated: true,
    setAuthenticated: () => {},
});

export const useAuthContext = () => {
const authenticated = useContext(authContext);
    return authenticated;
}
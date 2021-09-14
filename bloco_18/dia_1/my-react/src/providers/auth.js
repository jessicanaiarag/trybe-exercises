import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    constructor(){
        super()
        state: {
            name: "Henrique",
        }
    }
    setState()

    const [user, setUser] = useState({
        name: "Henrique",
    });

    console.log(user)
    setUser({name: 'jessica'})
    console.log(user)

    useEffect(() => {
        const userStorage = localStorage.getItem('user');
        if (userStorage) {
            setUser(JSON.parse(userStorage))
        } else {
            setUser({
                name: "",
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);
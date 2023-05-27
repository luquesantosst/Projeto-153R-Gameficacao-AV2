import { createContext, useEffect, useState } from "react";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as SignOutFirebase,
    onAuthStateChanged
} from 'firebase/auth';

const UserContext = createContext({})

const UserProvider = ({ children }) => {

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const auth = getAuth()
    const listenAuth = (userState: any) => {
        setUser(auth.currentUser)
    }
    const [user, setUser] = useState(null);

    const [LoginPermission, setLoginPermission] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    

    const signIn = (email: string, password: string) => {
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
        }).catch((error) => {
            console.log("Credenciais Invalidas", error)
        })
    }

    const signOut = () => {
        console.log("tchau")

        SignOutFirebase(auth).then(() => {
            console.log("Deslogado com sucesso")
        })
    }

    return (
        <UserContext.Provider value={{ LoginPermission, signIn, signOut, email, password, handleEmailChange, handlePasswordChange }}>
            {children}
        </UserContext.Provider>

    )
}

export { UserContext, UserProvider }
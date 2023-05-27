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
        console.log("ListenAuth", userState)
        setUser(auth.currentUser)
        setLoading(false)
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
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {

        }).catch((error) => {
            console.log("Credenciais Invalidas", error)
            setLoading(false)
        })
    }

    const signOut = () => {
        console.log("tchau")
        SignOutFirebase(auth).then(() => {
            console.log("Deslogado com sucesso")
            setLoading(false)
        }).catch((error) => {
            console.log("error", error)
            setLoading(false)
        })
    }

    const [loading, setLoading] = useState(true)

    return (
        <UserContext.Provider value={{ LoginPermission, signIn, signOut, loading, email, password, handleEmailChange, handlePasswordChange, user }}>
            {children}
        </UserContext.Provider>

    )
}

export { UserContext, UserProvider }
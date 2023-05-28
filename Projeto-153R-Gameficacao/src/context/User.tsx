import { createContext, useEffect, useState } from "react";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as SignOutFirebase,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from 'firebase/auth';

const UserContext = createContext({})

interface IUserProvider {
    children: React.ReactNode
}

const UserProvider :React.FC<IUserProvider> = ({ children }) => {

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const auth: any = getAuth()
    const listenAuth = (userState: any) => {
        console.log("ListenAuth", userState)
        setUser(auth.currentUser)
        setLoading(false)
    }
    const [user, setUser] = useState(null);

    const [LoginPermission, setLoginPermission] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const [errorLogin, setErrorLogin] = useState("none")

    const signUp = (email: string, password: string) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password).then(() => {

        }).catch((error) => {
            console.log("Credenciais Invalidas", error)
            setLoading(false)
        })
    }

    const signIn = (email: string, password: string) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password).then(() => {

        }).catch((error) => {
            console.log("Credenciais Invalidas", error)
            setErrorLogin("block")
            setLoading(false)
        })
    }

    const signOut = () => {
        SignOutFirebase(auth).then(() => {
            console.log("Deslogado com sucesso")
            setErrorLogin("none")
            setLoading(false)
        }).catch((error) => {
            console.log("error", error)
            setLoading(false)
        })
    }

    const [totalXp, setTotalXp] = useState(0)

    
    const incrementer = (valor: any) => {
        let xp = totalXp + valor 
        setTotalXp(xp)
    }

    const [loading, setLoading] = useState(true)

    return (
        <UserContext.Provider value={{ setLoginPermission, LoginPermission, signIn, signOut, loading, email, password, handleEmailChange, handlePasswordChange, user, signUp, errorLogin, totalXp, incrementer }}>
            {children}
        </UserContext.Provider>

    )
}

export { UserContext, UserProvider }
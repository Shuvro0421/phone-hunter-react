import { createContext } from "react";
import { signInWithEmailAndPassword  , onAuthStateChanged   ,  createUserWithEmailAndPassword , signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)

    const createUser = (name , email , password) =>{
        return createUserWithEmailAndPassword(auth , name , email , password)
    }

    const signInUser = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            
        })
        return () =>{
            unSubscribe()
        }
    } , [])

    const logOut = () =>{
        return signOut(auth)
    }



    const authInfo = {createUser , signInUser , user , logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
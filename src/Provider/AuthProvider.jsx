import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/.firebase.init";
export const AuthContext = createContext(null);
const googleProvider= new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)
    }
    const userLogOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile=(name, photo)=>{
       return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }
    const googleSignUp =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(() => {
        const unsubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubScribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        userLogOut,
        updateUserProfile,
        googleSignUp
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
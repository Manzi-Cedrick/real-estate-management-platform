import { useContext, createContext, useEffect, useState, useCallback } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { auth } from "../firebase"

interface IAuthContext {
  googleSignIn: () => void,
  logOut: () => void,
  user: any
}

const AuthContext = createContext<IAuthContext>({
  googleSignIn: () => { },
  logOut: () => { },
  user: null
});

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({})
  const googleSignIn = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }, [])

  const logOut = () => {
    console.log("out user")
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext);
}
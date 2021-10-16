import { useEffect, useState } from "react";
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // all state here
  const [user, setUser] = useState({});

  //provider
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google sing in
  const singInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result.user);
    });
  };

  // observe user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  // logout
  const logOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return {
    user,
    singInUsingGoogle,
    logOut
  };
};

export default useFirebase;

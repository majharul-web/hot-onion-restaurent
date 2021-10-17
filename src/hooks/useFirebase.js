import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,

  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  // all state here
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //provider
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // google sing in
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  // user resister
  const userRegister = (email, password,name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        verifyEmail();
        setUserName(name)

      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      });
  }

  // set user name
  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => { }
      )
      .catch((error) => {
        console.log(error.message);
      });
  }


  // user login
  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };



  // observe user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    user,
    singInUsingGoogle,
    logOut,
    userRegister,
    userLogin,
    isLoading
  };
};

export default useFirebase;

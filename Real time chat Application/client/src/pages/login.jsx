import React from "react";
import Image from "next/image";
import {FcGoogle} from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";


const handlelogin = async () => {
  const provider = new GoogleAuthProvider()
                   //new GoogleAuthProvider() creates an instance of Google's authentication provider. This object is used to configure the sign-in process with Google as the authentication provider.
  const {user} = await signInWithPopup(firebaseAuth,provider);
                  //   This line uses the signInWithPopup method to authenticate a user with Google using a popup window.
                  // firebaseAuth is the Firebase authentication instance.
                  // provider is an instance of GoogleAuthProvider.
                  // await waits for the sign-in process to complete.
                  // The result is an object containing user information, from which the user property is extracted using destructuring.
  console.log("user ",user);
}


function login() {
  return <div className="justify-center flex items-center  h-screen w-screen flex-col bg-panel-header-background">
    <div className="flex items-center text-white justify-center">
      <Image src='/gif.gif' alt='samyog' height={382} width={389}></Image>
      <span className="text-6xl">Samyoga</span>
    </div>
    <button className="flex justify-center gap-7 items-center bg-search-input-container-background p-4 rounded-lg" onClick={handlelogin}>
      <FcGoogle className="text-4xl"/>
      <span className="text-xl text-white">Login in with Google</span>
    </button>
  </div>;
}

export default login;

import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function login() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const { user: { displayName: name, email, photoURL: profileImage } } = await signInWithPopup(firebaseAuth, provider);

      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log("data", { data });

        if (!data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage,
              status: ""
            }
          });
          router.push("/onboarding");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="justify-center flex items-center h-screen w-screen flex-col bg-panel-header-background">
      <div className="flex items-center text-white justify-center">
        <Image src='/gif.gif' alt='samyog' height={382} width={389} />
        <span className="text-6xl">Samyoga</span>
      </div>
      <button className="flex justify-center gap-7 items-center bg-search-input-container-background p-4 rounded-lg" onClick={handleLogin}>
        <FcGoogle className="text-4xl" />
        <span className="text-xl text-white">Login with Google</span>
      </button>
    </div>
  );
}

export default login;

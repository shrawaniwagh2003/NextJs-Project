import React from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";

function Onboarding() {
  const [{ userInfo }] = useStateProvider();
  console.log(userInfo);

  return (
    <div className="flex justify-center bg-panel-header-background h-screen w-screen text-white flex-col items-center">
      <div className="flex justify-center items-center gap-2">
        <Image src="/whatsapp.gif" alt="Samyoga" height={300} width={300} />
        <span className="text-7xl">Samyog</span>
      </div>
      <h2 className="text-2xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-5">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">


          
        </div>
      </div>
    </div>
  );
}

export default Onboarding;

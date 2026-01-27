"use client"

import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { useRouter } from "next/navigation";

 const page = () =>{

  const router = useRouter()

  const handleLogin = () =>{
    try {
      router.push("/admin/dashboard")
    } catch (error) {
      
    }
  }
  return(
    <>
    <div className="w-full h-full flex center flex-col gap-10 items-center ">
    <span className="text-center">Login Screen</span>

<div className="w-sm">
    <GlobalButton
    text="Login"
    onClick={handleLogin}
    className=""
    />
</div>
    </div>
    </>
  )
}

export default page;

"use client"


// ADMIN  FIELD_REP QA CLIENT_ADMIN CLIENT_USER
import { GlobalButton } from "@/components/Buttons/GlobalButton";
import { useRouter } from "next/navigation";


export type UserRole =
  | "ADMIN"
  | "FIELD_REP"
  | "QA"
  | "CLIENT_ADMIN"
  | "CLIENT_USER";


const page = () =>{
  
  const router = useRouter()


// let role = "FIELD_REP"

  const handleLogin = () =>{
    try {
      // if(role === "ADMIN"){
      // router.push("/admin/dashboard")
      // }
      // else if(role === "FIELD_REP"){
      //    router.push("/field-rep/dashboard")
      // }
      //  else if(role === "QA"){
      //    router.push("/QA/dashboard")
      // }
      //  else if(role === "CLIENT_ADMIN"){
      //    router.push("/client-administrator/dashboard")
      // }
      //  else if(role === "CLIENT_USER"){
      //    router.push("/client-user/dashboard")
      // }
      // else{
      //   console.log("Invalid Role")
      // }
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
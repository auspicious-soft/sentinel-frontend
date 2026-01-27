// "use client"


// // ADMIN  FIELD_REP QA CLIENT_ADMIN CLIENT_USER
// import { GlobalButton } from "@/components/Buttons/GlobalButton";
// import { useRouter } from "next/navigation";


// export type UserRole =
//   | "ADMIN"
//   | "FIELD_REP"
//   | "QA"
//   | "CLIENT_ADMIN"
//   | "CLIENT_USER";


// const page = () =>{
  
//   const router = useRouter()


// // let role = "FIELD_REP"

//   const handleLogin = () =>{
//     try {
//       // if(role === "ADMIN"){
//       // router.push("/admin/dashboard")
//       // }
//       // else if(role === "FIELD_REP"){
//       //    router.push("/field-rep/dashboard")
//       // }
//       //  else if(role === "QA"){
//       //    router.push("/QA/dashboard")
//       // }
//       //  else if(role === "CLIENT_ADMIN"){
//       //    router.push("/client-administrator/dashboard")
//       // }
//       //  else if(role === "CLIENT_USER"){
//       //    router.push("/client-user/dashboard")
//       // }
//       // else{
//       //   console.log("Invalid Role")
//       // }
//        router.push("/admin/dashboard")
//     } catch (error) {
      
//     }
//   }
//   return(
//     <>
//     <div className="w-full h-full flex center flex-col gap-10 items-center ">
//     <span className="text-center">Login Screen</span>

// <div className="w-sm">
//     <GlobalButton
//     text="Login"
//     onClick={handleLogin}
//     className=""
//     />
// </div>
//     </div>
//     </>
//   )
// }

// export default page;




"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import loginBg from '../../public/images/mainBG.png';
import { AuthForm } from '@/components/Forms/AuthForm';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    try {
      // Your login API call here
      console.log('Login:', formData);
      
      // Example: Store user data after successful login
      // localStorage.setItem('userName', 'Bruce');
      // localStorage.setItem('userRole', 'ADMIN');
      // router.push('/admin/dashboard');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={loginBg}
        alt="Login Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 min-h-screen w-full flex items-center justify-end right-10 p-4">
        <AuthForm
          heading="Login To Your Account"
          subheading="Sign in with email and password to securely access your account."
          fields={[
            {
              type: 'email',
              name: 'email',
              label: 'Email',
              placeholder: 'Email',
              value: formData.email,
              onChange: handleChange('email'),
              required: true,
            },
            {
              type: 'password',
              name: 'password',
              label: 'Password',
              placeholder: 'Password',
              value: formData.password,
              onChange: handleChange('password'),
              required: true,
              showPasswordToggle: true,
            },
          ]}
          buttonText="Login"
          onSubmit={handleSubmit}
          showForgotPassword={true}
          forgotPasswordText="Forgot Password?"
          forgotPasswordLink="/forgot-password"
          bottomText="Have Issues?"
          bottomLinkText="Contact Support"
          bottomLink="/support"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default LoginPage;
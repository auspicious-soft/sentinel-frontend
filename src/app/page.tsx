"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AuthForm } from '@/components/Forms/AuthForm';
import loginBg from '../../public/images/mainBG.png';
import logo from '../../public/images/logo1.png';

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
      router.push('/admin/dashboard');
      
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
      {/* Background Image */}
      <Image
        src={loginBg}
        alt="Login Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Auth Form Container */}
    <div className="relative z-10 min-h-screen w-full flex items-center justify-end lg:pr-20 md:pr-10 px-4 max-[500px]:justify-center max-[500px]:px-4 max-[400px]:px-3 max-[350px]:px-2">
        <AuthForm
          logoSrc={logo}
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
          // bottomText="Have Issues?"
          // bottomLinkText="Contact Support"
          // bottomLink="/support"
          isLoading={isLoading}
         className="max-[500px]:scale-90 max-[400px]:scale-75 max-[320px]:scale-65"
        />
      </div>
    </div>
  );
};

export default LoginPage;
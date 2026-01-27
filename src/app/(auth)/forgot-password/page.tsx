"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import loginBg from '../../../../public/images/mainBG.png';
import { AuthForm } from '@/components/Forms/AuthForm';

const ForgetPasswordPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    try {
      console.log('Login:', formData);
    
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
          heading="Forget Password"
          subheading="Reset your password by email link and set a new one securely."
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
          ]}
          buttonText="Verify Email"
          onSubmit={handleSubmit}
          showForgotPassword={false}
        //   forgotPasswordText="Forgot Password?"
        //   forgotPasswordLink="/forgot-password"
          bottomText="Have Issues?"
          bottomLinkText="Contact Support"
          bottomLink="/support"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
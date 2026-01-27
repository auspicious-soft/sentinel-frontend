"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import loginBg from '../../../../public/images/mainBG.png';
import { AuthForm } from '@/components/Forms/AuthForm';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
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
          heading="Create Password"
          subheading="Create a strong new password and confirm it to secure access."
          fields={[
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
            {
              type: 'password',
              name: 'confirmPassword',
              label: 'Confirm Password',
              placeholder: 'Confirm Password',
              value: formData.confirmPassword,
              onChange: handleChange('confirmPassword'),
              required: true,
              showPasswordToggle: true,
            },
          ]}
          buttonText="Update Password"
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

export default LoginPage;
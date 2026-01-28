"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import loginBg from '../../../../public/images/mainBG.png';
import { AuthForm } from '@/components/Forms/AuthForm';

const otpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    otp: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    try {
      console.log('Login:', formData);
      router.push("/create-password")
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

    <div className="relative z-10 min-h-screen w-full flex items-center justify-end lg:pr-20 md:pr-10 px-4 max-[500px]:justify-center max-[500px]:px-4 max-[400px]:px-3 max-[350px]:px-2">
        <AuthForm
          heading="Enter OTP"
          subheading="Enter the one-time code sent to your registered email address."
          fields={[
            {
              type: 'number',
              name: 'otp',
              label: 'OTP',
              placeholder: 'Enter OTP',
              value: formData.otp,
              onChange: handleChange('otp'),
              required: true,
            },
          ]}
          buttonText="Verify OTP"
          onSubmit={handleSubmit}
          showForgotPassword={false}
        //   forgotPasswordText="Forgot Password?"
        //   forgotPasswordLink="/forgot-password"
          bottomText="Have Issues?"
          bottomLinkText="Contact Support"
          bottomLink="/support"
          isLoading={isLoading}
           className="max-[500px]:scale-90 max-[400px]:scale-75 max-[320px]:scale-65"
        />
      </div>
    </div>
  );
};

export default otpPage;
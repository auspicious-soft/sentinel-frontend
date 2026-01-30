"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import loginBg from "../../../../public/images/mainBG.png";
import { AuthForm } from "@/components/Forms/AuthForm";
import { NonFieldModal } from "@/components/Modals/NonFieldModal";
import icon from "../../../../public/icons/updatePassword.svg";
const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    try {
      console.log("Login:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShowModal(true);
    } catch (error) {
      console.error("Login error:", error);
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
          heading="Create Password"
          subheading="Create a strong new password and confirm it to secure access."
          fields={[
            {
              type: "password",
              name: "password",
              label: "Password",
              placeholder: "Password",
              value: formData.password,
              onChange: handleChange("password"),
              required: true,
              showPasswordToggle: true,
            },
            {
              type: "password",
              name: "confirmPassword",
              label: "Confirm Password",
              placeholder: "Confirm Password",
              value: formData.confirmPassword,
              onChange: handleChange("confirmPassword"),
              required: true,
              showPasswordToggle: true,
            },
          ]}
          buttonText="Update Password"
          onSubmit={handleSubmit}
          showForgotPassword={false}
          //   forgotPasswordText="Forgot Password?"
          //   forgotPasswordLink="/forgot-password"
          bottomText="Remember Password?"
          bottomLinkText="Login"
          bottomLink="/"
          isLoading={isLoading}
          className="max-[500px]:scale-90 max-[400px]:scale-75 max-[320px]:scale-65"
        />

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <NonFieldModal
              icon={icon}
              headingText="Password Updated"
              paragraphText="Your password has been updated. Please login to continue."
              confirmButtonText="Okay"
              onConfirm={() => {
                setShowModal(false);
                router.push("/");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

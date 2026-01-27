"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoutIcon from '../../../public/icons/logout.svg';
import { MAIN_HEADING } from '@/styles/assets';

export type UserRole = 'ADMIN' | 'FIELD_REP' | 'QA' | 'CLIENT_ADMIN' | 'CLIENT_USER';

interface NavbarConfig {
  showUserName: boolean;
  welcomeText: string;
}

const navbarConfig: Record<UserRole, NavbarConfig> = {
  ADMIN: {
    showUserName: false,
    welcomeText: 'Welcome To Sentinel',
  },
  FIELD_REP: {
    showUserName: true,
    welcomeText: 'Welcome',
  },
  QA: {
    showUserName: true,
    welcomeText: 'Welcome',
  },
  CLIENT_ADMIN: {
    showUserName: true,
    welcomeText: 'Welcome',
  },
  CLIENT_USER: {
    showUserName: true,
    welcomeText: 'Welcome',
  },
};

interface DynamicNavbarProps {
  role: UserRole;
  className?: string;
}

export const DynamicNavbar: React.FC<DynamicNavbarProps> = ({ role, className = '' }) => {
  const [userName, setUserName] = useState<string>('');
  const router = useRouter();
  const config = navbarConfig[role];

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');

    router.push('/');
  };

  const getDisplayText = () => {
    if (config.showUserName && userName) {
      return `${config.welcomeText} ${userName}!`;
    }
    return config.welcomeText;
  };

  return (
   <div className={`self-stretch inline-flex justify-between items-center ${className}`}>
      <div className="w-auto justify-center text-[#060606] text-xl md:text-3xl lg:text-3xl font-semibold font-['Plus_Jakarta_Sans']">
        {getDisplayText()}
      </div>
      
      <div className="flex-1 flex justify-end items-start gap-2.5">
        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-white rounded-2xl border border-zinc-500 flex justify-start items-center gap-2.5 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="flex justify-start items-center gap-2.5">
            <div className="w-4 h-4 relative overflow-hidden">
              <Image
                src={logoutIcon}
                alt="Logout"
                width={20}
                height={20}
                className="w-4 h-4"
              />
            </div>
            <div className="inline-flex flex-col justify-center items-start gap-1">
              <div className="justify-start text-Paragraph text-xs font-normal font-['Plus_Jakarta_Sans']"> 
                Logout
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
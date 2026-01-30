"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import logo from '../../../public/images/logo.png';

// Import all icons
import dashboardIcon from '../../../public/icons/dashboard.svg';
import companiesIcon from '../../../public/icons/companies.svg';
import fieldRepsIcon from '../../../public/icons/field-reps.svg';
import qualityRepsIcon from '../../../public/icons/quality-reps.svg';
import assignmentsIcon from '../../../public/icons/assignments.svg';
import monitorTasksIcon from '../../../public/icons/monitor-tasks.svg';
import submitRequestIcon from '../../../public/icons/submit-request.svg';
import reassignIcon from '../../../public/icons/reassign.svg';
import searchIcon from '../../../public/icons/search.svg';
import zipCodeIcon from '../../../public/icons/zipcode.svg';
import mapIcon from '../../../public/icons/map.svg';
import billingIcon from '../../../public/icons/billing.svg';
import passwordIcon from '../../../public/icons/password.svg';

export type UserRole = 'ADMIN' | 'FIELD_REP' | 'QA' | 'CLIENT_ADMIN' | 'CLIENT_USER';

interface NavItem {
  label: string;
  path: string;
  icon: any;
}

interface SidebarConfig {
  [key: string]: NavItem[];
}

const sidebarConfig: SidebarConfig = {
  ADMIN: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: dashboardIcon },
    { label: 'Companies', path: '/admin/companies', icon: companiesIcon },
    { label: 'Field Reps', path: '/admin/field-reps', icon: fieldRepsIcon },
    { label: 'Quality Reps', path: '/admin/quality-reps', icon: qualityRepsIcon },
    { label: 'New Assignments', path: '/admin/new-assignments', icon: assignmentsIcon },
    { label: 'Monitor Tasks', path: '/admin/monitor-tasks', icon: monitorTasksIcon },
    { label: 'Submit Request', path: '/admin/submit-request', icon: submitRequestIcon },
    { label: 'Re-Assign Inspections', path: '/admin/reAssign-inspections', icon: reassignIcon },
    { label: 'Search Inspections', path: '/admin/search-inspections', icon: searchIcon },
    { label: 'Zip Code Manager', path: '/admin/zip-code-manager', icon: zipCodeIcon },
    { label: 'Field Rep Map', path: '/admin/field-rep-map', icon: mapIcon },
    { label: 'Billing Reports', path: '/admin/billing-reports', icon: billingIcon },
    { label: 'Change Password', path: '/admin/change-password', icon: passwordIcon },
  ],
  FIELD_REP: [
    { label: 'Dashboard', path: '/field-rep/dashboard', icon: dashboardIcon },
    { label: 'Monitor Tasks', path: '/field-rep/monitor-tasks', icon: monitorTasksIcon },
    { label: 'Change Password', path: '/field-rep/change-password', icon: passwordIcon },
  ],
  QA: [
    { label: 'Dashboard', path: '/QA/dashboard', icon: dashboardIcon },
    { label: 'Monitor Tasks', path: '/QA/monitor-tasks', icon: monitorTasksIcon },
    { label: 'Search Inspections', path: '/QA/search-inspections', icon: searchIcon },
    { label: 'Change Password', path: '/QA/change-password', icon: passwordIcon },
  ],
  CLIENT_ADMIN: [
    { label: 'Dashboard', path: '/client-administrator/dashboard', icon: dashboardIcon },
    { label: 'Company Users', path: '/client-administrator/company-users', icon: companiesIcon },
    { label: 'Monitor Tasks', path: '/client-administrator/monitor-tasks', icon: monitorTasksIcon },
    { label: 'Submit Request', path: '/client-administrator/submit-request', icon: submitRequestIcon },
    { label: 'Search Inspections', path: '/client-administrator/search-inspections', icon: searchIcon },
    { label: 'Re-Assign UnderWriters', path: '/client-administrator/reAssign-underwriters', icon: assignmentsIcon },
    { label: 'Change Password', path: '/client-administrator/change-password', icon: passwordIcon },
  ],
  CLIENT_USER: [
    { label: 'Dashboard', path: '/client-user/dashboard', icon: dashboardIcon },
    { label: 'Monitor Tasks', path: '/client-user/monitor-tasks', icon: monitorTasksIcon },
    { label: 'Search Inspections', path: '/client-user/search-inspections', icon: searchIcon },
    { label: 'Change Password', path: '/client-user/change-password', icon: passwordIcon },
  ],
};

interface DynamicSidebarProps {
  role: UserRole;
  className?: string;
}

export const DynamicSidebar: React.FC<DynamicSidebarProps> = ({ role, className = '' }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const pathname = usePathname();
  const navItems = sidebarConfig[role] || [];

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleDesktopSidebar = () => {
    setIsDesktopCollapsed(!isDesktopCollapsed);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {!isMobileOpen && (
        <button
          onClick={toggleMobileSidebar}
          className="lg:hidden sticky top-4 left-1 z-50 p-2 rounded-lg bg-medium-blue self-start cursor-pointer"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-Paragraph" />
        </button>
      )}

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 backdrop-blur-3xl z-30"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          bg-light-blue rounded-[10px]
          transition-all duration-300 ease-in-out
          z-40 
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isDesktopCollapsed ? 'lg:w-20' : 'lg:w-auto'}
          ${isDesktopCollapsed ? 'lg:px-2' : 'lg:px-3'}
          px-3
          ${className}
        `}
      >
        <div className="inline-flex flex-col justify-start items-start gap-5 h-full w-full">
          {/* Header */}
          <div className={`self-stretch inline-flex items-center ${isDesktopCollapsed ? 'lg:justify-center lg:py-6' : ''} justify-between`}>
            {/* Logo - Hidden when collapsed on desktop, always shown on mobile */}
            <Image
              src={logo}
              alt="Logo"
              width={211}
              height={75}
              className={`flex-1 h-20 object-contain mix-blend-multiply ${isDesktopCollapsed ? 'lg:hidden' : ''}`}
              priority
            />
            
            {/* Toggle Button - Desktop only */}
            <button
              onClick={toggleDesktopSidebar}
              className="hidden lg:block w-7 h-7 hover:bg-primary-blue/10 rounded transition-colors cursor-pointer"
              aria-label="Toggle sidebar"
            >
              {isDesktopCollapsed ? (
                <ChevronRight className="w-7 h-7 text-Paragraph" />
              ) : (
                <ChevronLeft className="w-7 h-7 text-Paragraph" />
              )}
            </button>

            {/* Close Button - Mobile only */}
            <button
              onClick={toggleMobileSidebar}
              className="lg:hidden w-7 h-7"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-Paragraph cursor-pointer" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col justify-start items-start gap-2.5 overflow-y-auto flex-1 w-full scrollbar-hide">
            <div className="flex flex-col justify-start items-start w-full">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path || pathname.startsWith(item.path + '/');
                return (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={`
                      self-stretch rounded-lg inline-flex items-center gap-2.5
                      transition-colors duration-200
                      ${isDesktopCollapsed ? 'lg:justify-center lg:px-2 lg:py-2.5' : 'lg:justify-start lg:px-4 lg:py-2.5'}
                      justify-start px-4 py-2.5
                      ${
                        isActive
                          ? 'bg-primary-blue text-white'
                          : 'text-Paragraph hover:bg-primary-blue/10'
                      }
                    `}
                    title={isDesktopCollapsed ? item.label : undefined}
                  >
                    <div className="w-4 h-4 relative shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={16}
                        height={16}
                        className={`w-4 h-4 ${isActive ? 'brightness-0 invert' : ''}`}
                      />
                    </div>
                    <div
                      className={`
                        justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] leading-8 whitespace-nowrap
                        ${isDesktopCollapsed ? 'lg:hidden' : ''}
                        ${isActive ? 'text-white' : 'text-Paragraph'}
                      `}
                    >
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
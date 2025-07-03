'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Layout as LayoutIcon,
  FileText,
  Calendar,
  User,
  Menu,
  X,
  Search,
  Bell,
  ChevronDown,
  MessageSquare,
  FolderOpen,
  GraduationCap,
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname(); // ✅ replaces useLocation()

  const navigation = [
    { name: 'Dashboard', icon: LayoutIcon, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Assignments', icon: FileText, path: '/assignments' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Forums', icon: MessageSquare, path: '/forums' },
    { name: 'Resources', icon: FolderOpen, path: '/resources' },
    { name: 'Grades', icon: GraduationCap, path: '/grades' },
    { name: 'Profile', icon: User, path: '/profile' },
  ];

  const notifications = [
    {
      id: 1,
      title: 'New Assignment Posted',
      message: 'Web Development: Final Project due in 3 days',
      time: '1 hour ago',
    },
    {
      id: 2,
      title: 'Forum Reply',
      message: 'Sarah commented on your discussion post',
      time: '2 hours ago',
    },
    {
      id: 3,
      title: 'Grade Updated',
      message: 'Your Data Science quiz has been graded',
      time: '5 hours ago',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 flex'>
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0 z-30 w-64 bg-white border-r border-gray-200 transition duration-200 ease-in-out`}
      >
        <div className='h-full flex flex-col'>
          <div className='flex items-center gap-2 p-6'>
            <BookOpen className='h-8 w-8 text-blue-600' />
            <h1 className='text-xl font-bold'>EduPortal</h1>
          </div>

          <nav className='flex-1 px-4 space-y-1 overflow-y-auto'>
            {navigation.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className='h-5 w-5' />
                  <span className='font-medium'>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className='p-4 border-t border-gray-200'>
            <div className='flex items-center gap-3 px-3 py-2'>
              <div className='flex-shrink-0'>
                <img
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt='Profile'
                  className='h-8 w-8 rounded-full'
                />
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium text-gray-900 truncate'>John Doe</p>
                <p className='text-xs text-gray-500 truncate'>Student</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col min-w-0'>
        <header className='bg-white border-b border-gray-200 sticky top-0 z-10'>
          <div className='px-4 sm:px-6 lg:px-8 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className='lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                >
                  {isSidebarOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                </button>
                <div className='relative max-w-md w-full hidden sm:block'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
                  <input
                    type='text'
                    placeholder='Search courses...'
                    className='pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                  />
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='relative'>
                  <button
                    className='p-2 relative'
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  >
                    <Bell className='h-5 w-5 text-gray-600' />
                    <span className='absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full'></span>
                  </button>

                  {isNotificationsOpen && (
                    <div className='absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className='px-4 py-3 hover:bg-gray-50 cursor-pointer'
                        >
                          <p className='text-sm font-medium text-gray-900'>{notification.title}</p>
                          <p className='text-sm text-gray-500'>{notification.message}</p>
                          <p className='text-xs text-gray-400 mt-1'>{notification.time}</p>
                        </div>
                      ))}
                      <div className='border-t border-gray-100 mt-2 pt-2 px-4'>
                        <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>
                          View all notifications
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className='relative'>
                  <button
                    className='flex items-center gap-2'
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                  >
                    <img
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt='Profile'
                      className='h-8 w-8 rounded-full object-cover'
                    />
                    <span className='font-medium hidden sm:block'>John Doe</span>
                    <ChevronDown className='h-4 w-4 text-gray-600' />
                  </button>

                  {isProfileOpen && (
                    <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50'>
                      <Link
                        href='/profile'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'
                      >
                        Your Profile
                      </Link>
                      <Link
                        href='/settings'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'
                      >
                        Settings
                      </Link>
                      <div className='border-t border-gray-100 my-1'></div>
                      <button className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8'>{children}</main>
      </div>
    </div>
  );
}

export default Layout;

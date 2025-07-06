'use client';

import { useState } from 'react';
import { Bell, Lock, Eye, Moon, Globe, Mail, Shield } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    assignmentReminders: true,
    courseUpdates: true,
    forumReplies: false,
  });

  const [appearance, setAppearance] = useState({
    theme: 'light',
    fontSize: 'medium',
    reducedMotion: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showOnlineStatus: true,
    showProgress: true,
  });

  return (
    <div className='max-w-4xl mx-auto space-y-6'>
      <h1 className='text-2xl font-bold'>Settings</h1>

      {/* Notifications */}
      <section className='bg-white rounded-xl border border-gray-200 p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <Bell className='h-5 w-5 text-blue-500' />
          <h2 className='text-lg font-semibold'>Notifications</h2>
        </div>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-medium'>Email Notifications</p>
              <p className='text-sm text-gray-500'>Receive updates via email</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={notifications.emailNotifications}
                onChange={(e) =>
                  setNotifications((prev) => ({
                    ...prev,
                    emailNotifications: e.target.checked,
                  }))
                }
                className='sr-only peer'
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <p className='font-medium'>Assignment Reminders</p>
              <p className='text-sm text-gray-500'>Get notified about upcoming deadlines</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={notifications.assignmentReminders}
                onChange={(e) =>
                  setNotifications((prev) => ({
                    ...prev,
                    assignmentReminders: e.target.checked,
                  }))
                }
                className='sr-only peer'
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className='bg-white rounded-xl border border-gray-200 p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <Moon className='h-5 w-5 text-blue-500' />
          <h2 className='text-lg font-semibold'>Appearance</h2>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor='theme-select' className='block text-sm font-medium mb-2'>
              Theme
            </label>
            <select
              id='theme-select'
              value={appearance.theme}
              onChange={(e) =>
                setAppearance((prev) => ({
                  ...prev,
                  theme: e.target.value,
                }))
              }
              className='w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='light'>Light</option>
              <option value='dark'>Dark</option>
              <option value='system'>System</option>
            </select>
          </div>

          <div>
            <label htmlFor='fontsize-select' className='block text-sm font-medium mb-2'>
              Font Size
            </label>
            <select
              id='fontsize-select'
              value={appearance.fontSize}
              onChange={(e) =>
                setAppearance((prev) => ({
                  ...prev,
                  fontSize: e.target.value,
                }))
              }
              className='w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className='bg-white rounded-xl border border-gray-200 p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <Shield className='h-5 w-5 text-blue-500' />
          <h2 className='text-lg font-semibold'>Privacy</h2>
        </div>
        <div className='space-y-4'>
          <div>
            <label htmlFor='visibility-select' className='block text-sm font-medium mb-2'>
              Profile Visibility
            </label>
            <select
              id='visibility-select'
              value={privacy.profileVisibility}
              onChange={(e) =>
                setPrivacy((prev) => ({
                  ...prev,
                  profileVisibility: e.target.value,
                }))
              }
              className='w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              <option value='public'>Public</option>
              <option value='private'>Private</option>
              <option value='friends'>Friends Only</option>
            </select>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <p className='font-medium'>Online Status</p>
              <p className='text-sm text-gray-500'>Show when you're active</p>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                checked={privacy.showOnlineStatus}
                onChange={(e) =>
                  setPrivacy((prev) => ({
                    ...prev,
                    showOnlineStatus: e.target.checked,
                  }))
                }
                className='sr-only peer'
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className='flex justify-end'>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
          Save Changes
        </button>
      </div>
    </div>
  );
}

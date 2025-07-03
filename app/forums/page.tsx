'use client';

import { useState } from 'react';
import { MessageSquare, ThumbsUp, Reply, Search } from 'lucide-react';

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  likes: number;
  replies: number;
  tags: string[];
}

export default function Forums() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Discussions' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'questions', name: 'Questions' },
    { id: 'announcements', name: 'Announcements' },
  ];

  const posts: ForumPost[] = [
    {
      id: 1,
      title: 'How to handle state management in large React applications?',
      content:
        "I'm working on a large-scale React application and wondering about the best practices for state management...",
      author: {
        name: 'Sarah Johnson',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2 hours ago',
      category: 'technical',
      likes: 15,
      replies: 23,
      tags: ['React', 'State Management', 'Best Practices'],
    },
    {
      id: 2,
      title: 'Tips for improving code review process',
      content:
        'Looking for suggestions on how to make our code review process more efficient and effective...',
      author: {
        name: 'Michael Chen',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '5 hours ago',
      category: 'general',
      likes: 8,
      replies: 12,
      tags: ['Code Review', 'Team Collaboration'],
    },
    {
      id: 3,
      title: 'Upcoming workshop on Cloud Computing',
      content: "We're excited to announce a new workshop series on cloud computing fundamentals...",
      author: {
        name: 'Emily Brown',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '1 day ago',
      category: 'announcements',
      likes: 32,
      replies: 5,
      tags: ['Workshop', 'Cloud Computing'],
    },
  ];

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === 'all' ? posts : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <h1 className='text-2xl font-bold'>Discussion Forums</h1>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
          New Discussion
        </button>
      </div>

      {/* Search and Filter */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='md:col-span-3'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
              type='text'
              placeholder='Search discussions...'
              className='pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              // You can add onChange for search functionality if you want
            />
          </div>
        </div>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Forum Posts */}
      <div className='space-y-4'>
        {filteredPosts.map((post) => (
          <div key={post.id} className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-start gap-4'>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className='h-10 w-10 rounded-full object-cover'
              />
              <div className='flex-1'>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='text-lg font-semibold mb-1'>{post.title}</h3>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                      {post.category}
                    </span>
                  </div>
                </div>

                <p className='mt-3 text-gray-600'>{post.content}</p>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='mt-4 flex items-center gap-6 pt-4 border-t border-gray-100'>
                  <button className='flex items-center gap-2 text-gray-500 hover:text-blue-600'>
                    <ThumbsUp className='h-5 w-5' />
                    <span>{post.likes}</span>
                  </button>
                  <button className='flex items-center gap-2 text-gray-500 hover:text-blue-600'>
                    <Reply className='h-5 w-5' />
                    <span>{post.replies} replies</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

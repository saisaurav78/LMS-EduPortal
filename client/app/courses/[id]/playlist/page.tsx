'use client'; 

import { useState } from 'react';
import { PlayCircle, CheckCircle, Download, MessageSquare, ThumbsUp, BookOpen } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  completed: boolean;
}

interface Resource {
  title: string;
  type: string;
  size: string;
}

interface Comment {
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  time: string;
  likes: number;
}

interface Course {
  title: string;
  instructor: string;
  videos: Video[];
  resources: Resource[];
  comments: Comment[];
}

interface Props {
  params: {
    id: string;
  };
}

export default function CoursePlaylist({ params }: Props) {
  const { id } = params;
  const [currentVideo, setCurrentVideo] = useState(0);

  // TODO: Replace with real data fetching by id
  const course: Course = {
    title: 'Advanced Web Development',
    instructor: 'Sarah Johnson',
    videos: [
      {
        id: 1,
        title: 'Introduction to Modern Web Development',
        duration: '10:30',
        thumbnail:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        completed: true,
      },
      {
        id: 2,
        title: 'Setting Up Your Development Environment',
        duration: '15:45',
        thumbnail:
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        completed: true,
      },
      {
        id: 3,
        title: 'Modern JavaScript Fundamentals',
        duration: '20:15',
        thumbnail:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        completed: false,
      },
      {
        id: 4,
        title: 'Working with React Components',
        duration: '25:00',
        thumbnail:
          'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        completed: false,
      },
    ],
    resources: [
      {
        title: 'Lesson Notes',
        type: 'PDF',
        size: '2.5 MB',
      },
      {
        title: 'Code Examples',
        type: 'ZIP',
        size: '1.8 MB',
      },
      {
        title: 'Exercise Files',
        type: 'ZIP',
        size: '3.2 MB',
      },
    ],
    comments: [
      {
        user: {
          name: 'Michael Chen',
          avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        text: 'Great explanation of modern JavaScript concepts!',
        time: '2 hours ago',
        likes: 12,
      },
      {
        user: {
          name: 'Emily Brown',
          avatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        text: 'The code examples were very helpful. Could you explain more about async/await?',
        time: '5 hours ago',
        likes: 8,
      },
    ],
  };

  return (
    <div className='flex flex-col lg:flex-row gap-6'>
      {/* Main Content */}
      <div className='lg:flex-1'>
        {/* Video Player */}
        <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
          <div className='aspect-video bg-gray-900 relative'>
            <img
              src={course.videos[currentVideo].thumbnail}
              alt={course.videos[currentVideo].title}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <button className='p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors'>
                <PlayCircle className='h-12 w-12 text-white' />
              </button>
            </div>
          </div>
          <div className='p-6'>
            <h1 className='text-2xl font-bold mb-2'>{course.videos[currentVideo].title}</h1>
            <div className='flex items-center gap-4 text-sm text-gray-500'>
              <span>{course.videos[currentVideo].duration}</span>
              <span>•</span>
              <span>
                Lesson {currentVideo + 1} of {course.videos.length}
              </span>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className='mt-6 bg-white rounded-xl border border-gray-200 p-6'>
          <h2 className='text-lg font-semibold mb-4'>Discussion</h2>
          <div className='space-y-6'>
            {course.comments.map((comment, index) => (
              <div key={index} className='flex gap-4'>
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className='h-10 w-10 rounded-full'
                />
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    <span className='font-medium'>{comment.user.name}</span>
                    <span className='text-sm text-gray-500'>{comment.time}</span>
                  </div>
                  <p className='text-gray-600 mb-2'>{comment.text}</p>
                  <button className='flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600'>
                    <ThumbsUp className='h-4 w-4' />
                    <span>{comment.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-6'>
            <textarea
              placeholder='Add a comment...'
              className='w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows={3}
            />
            <div className='mt-2 flex justify-end'>
              <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className='lg:w-80 space-y-6'>
        {/* Course Progress */}
        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <h2 className='text-lg font-semibold mb-4'>Course Content</h2>
          <div className='space-y-2'>
            {course.videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideo(index)}
                className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${
                  currentVideo === index ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <div className='flex-shrink-0'>
                  {video.completed ? (
                    <CheckCircle className='h-5 w-5 text-green-500' />
                  ) : (
                    <PlayCircle className='h-5 w-5 text-gray-400' />
                  )}
                </div>
                <div className='flex-1 text-left'>
                  <p
                    className={`font-medium ${
                      currentVideo === index ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    {video.title}
                  </p>
                  <p className='text-sm text-gray-500'>{video.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <h2 className='text-lg font-semibold mb-4'>Resources</h2>
          <div className='space-y-3'>
            {course.resources.map((resource, index) => (
              <div
                key={index}
                className='flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50'
              >
                <div className='flex items-center gap-3'>
                  <BookOpen className='h-5 w-5 text-gray-400' />
                  <div>
                    <p className='font-medium'>{resource.title}</p>
                    <p className='text-sm text-gray-500'>
                      {resource.type} • {resource.size}
                    </p>
                  </div>
                </div>
                <button className='p-2 text-gray-500 hover:text-blue-600'>
                  <Download className='h-5 w-5' />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

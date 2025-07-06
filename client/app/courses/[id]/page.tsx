import { PlayCircle, FileText, MessageSquare, Users, Clock, Award } from 'lucide-react';

interface Lesson {
  title: string;
  duration: string;
  completed: boolean;
}

interface Module {
  title: string;
  lessons: Lesson[];
}

interface Announcement {
  title: string;
  content: string;
  date: string;
}

interface Course {
  title: string;
  instructor: string;
  description: string;
  progress: number;
  duration: string;
  students: number;
  rating: number;
  image: string;
  modules: Module[];
  announcements: Announcement[];
}

interface Props {
  params: {
    id: string;
  };
}

export default function CourseDetailsPage({ params }: Props) {
  const { id } = params;

  // TODO: Replace this mock with real API call using id
  const course: Course = {
    title: 'Advanced Web Development',
    instructor: 'Sarah Johnson',
    description:
      'Master modern web development with React, Node.js, and cloud technologies. Learn through hands-on projects and real-world examples.',
    progress: 75,
    duration: '8h 30m',
    students: 234,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    modules: [
      {
        title: 'Introduction to Modern Web Development',
        lessons: [
          { title: 'Course Overview', duration: '10min', completed: true },
          { title: 'Setting Up Your Development Environment', duration: '15min', completed: true },
          { title: 'Modern JavaScript Fundamentals', duration: '30min', completed: true },
        ],
      },
      {
        title: 'React Fundamentals',
        lessons: [
          { title: 'Introduction to React', duration: '25min', completed: true },
          { title: 'Components and Props', duration: '35min', completed: false },
          { title: 'State and Lifecycle', duration: '40min', completed: false },
        ],
      },
      {
        title: 'Backend Development',
        lessons: [
          { title: 'Node.js Basics', duration: '30min', completed: false },
          { title: 'RESTful APIs', duration: '45min', completed: false },
          { title: 'Database Integration', duration: '50min', completed: false },
        ],
      },
    ],
    announcements: [
      {
        title: 'Project Deadline Extended',
        content: 'The final project deadline has been extended by one week.',
        date: '2 days ago',
      },
      {
        title: 'New Resource Available',
        content: 'Additional reading materials have been added to Module 2.',
        date: '5 days ago',
      },
    ],
  };

  return (
    <div className='space-y-6'>
      {/* Course Header */}
      <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
        <div className='h-48 relative'>
          <img src={course.image} alt={course.title} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
          <div className='absolute bottom-0 left-0 p-6 text-white'>
            <h1 className='text-3xl font-bold mb-2'>{course.title}</h1>
            <div className='flex items-center gap-4 text-sm'>
              <div className='flex items-center gap-1'>
                <Users className='h-4 w-4' />
                <span>{course.students} students</span>
              </div>
              <div className='flex items-center gap-1'>
                <Clock className='h-4 w-4' />
                <span>{course.duration}</span>
              </div>
              <div className='flex items-center gap-1'>
                <Award className='h-4 w-4' />
                <span>{course.rating} rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Course Content */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Progress */}
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Your Progress</h2>
            <div className='mb-4'>
              <div className='flex justify-between text-sm mb-1'>
                <span>Course Completion</span>
                <span>{course.progress}%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-blue-600 h-2 rounded-full'
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Course Modules */}
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Course Content</h2>
            <div className='space-y-4'>
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className='border border-gray-200 rounded-lg'>
                  <div className='p-4 bg-gray-50 rounded-t-lg'>
                    <h3 className='font-medium'>{module.title}</h3>
                  </div>
                  <div className='divide-y divide-gray-200'>
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className='p-4 flex items-center justify-between hover:bg-gray-50'
                      >
                        <div className='flex items-center gap-3'>
                          <PlayCircle
                            className={`h-5 w-5 ${
                              lesson.completed ? 'text-green-500' : 'text-gray-400'
                            }`}
                          />
                          <span className={lesson.completed ? 'text-gray-600' : 'text-gray-900'}>
                            {lesson.title}
                          </span>
                        </div>
                        <span className='text-sm text-gray-500'>{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Instructor */}
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Instructor</h2>
            <div className='flex items-center gap-4'>
              <img
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt={course.instructor}
                className='h-12 w-12 rounded-full object-cover'
              />
              <div>
                <h3 className='font-medium'>{course.instructor}</h3>
                <p className='text-sm text-gray-500'>Web Development Instructor</p>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Announcements</h2>
            <div className='space-y-4'>
              {course.announcements.map((announcement, index) => (
                <div key={index} className='border-b border-gray-200 last:border-0 pb-4 last:pb-0'>
                  <h3 className='font-medium mb-1'>{announcement.title}</h3>
                  <p className='text-sm text-gray-600 mb-2'>{announcement.content}</p>
                  <span className='text-xs text-gray-500'>{announcement.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Quick Links</h2>
            <div className='space-y-2'>
              <button className='w-full flex items-center gap-2 text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50'>
                <FileText className='h-5 w-5' />
                <span>Course Resources</span>
              </button>
              <button className='w-full flex items-center gap-2 text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50'>
                <MessageSquare className='h-5 w-5' />
                <span>Discussion Forum</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

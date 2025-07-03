'use client';

import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  duration: string;
  students: number;
  price: string;
}

function CourseCard({
  image,
  title,
  description,
  instructor,
  rating,
  duration,
  students,
  price,
}: CourseCardProps) {
  return (
    <div className='bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-6 flex-1 flex flex-col'>
        <h3 className='text-lg font-bold mb-2'>{title}</h3>
        <p className='text-gray-600 mb-4 flex-1'>{description}</p>
        <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
          <div className='flex items-center gap-1'>
            <Users className='h-4 w-4' />
            <span>{students} students</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='h-4 w-4' />
            <span>{duration}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
            <span>{rating}</span>
          </div>
        </div>
        <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
          <div className='flex items-center gap-2'>
            <img
              src={`https://images.unsplash.com/photo-${
                Math.random() > 0.5 ? '1494790108377-be9c29b29330' : '1507003211169-0a1dd7228f2d'
              }?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
              alt={instructor}
              className='h-6 w-6 rounded-full object-cover'
            />
            <span className='text-sm font-medium'>{instructor}</span>
          </div>
          <span className='text-lg font-bold text-blue-600'>{price}</span>
        </div>
      </div>
    </div>
  );
}

function Courses() {
  const courses = [
    {
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Advanced Web Development',
      description: 'Master modern web development with React, Node.js, and cloud technologies.',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      duration: '8h 30m',
      students: 234,
      price: '$89.99',
    },
    {
      image:
        'https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Data Science Fundamentals',
      description: 'Learn the basics of data science, statistics, and machine learning.',
      instructor: 'Michael Chen',
      rating: 4.6,
      duration: '12h 15m',
      students: 189,
      price: '$79.99',
    },
    {
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile apps using React Native and Flutter.',
      instructor: 'Emily Brown',
      rating: 4.7,
      duration: '10h 45m',
      students: 156,
      price: '$94.99',
    },
    {
      image:
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'UI/UX Design Principles',
      description: 'Master the fundamentals of user interface and experience design.',
      instructor: 'David Wilson',
      rating: 4.9,
      duration: '6h 20m',
      students: 312,
      price: '$69.99',
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Available Courses</h1>
        <div className='flex gap-2'>
          <select className='border border-gray-200 rounded-lg px-3 py-2 bg-white'>
            <option>All Categories</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Mobile Development</option>
            <option>Design</option>
          </select>
          <select className='border border-gray-200 rounded-lg px-3 py-2 bg-white'>
            <option>Sort by: Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;

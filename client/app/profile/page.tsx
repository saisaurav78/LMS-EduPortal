import { Mail, Phone, MapPin, Book, Award, Clock } from 'lucide-react';

interface Certificate {
  course: string;
  date: string;
  image: string;
}

interface CourseProgress {
  course: string;
  progress: number;
}

export default function Profile() {
  const courseProgress: CourseProgress[] = [
    { course: 'Advanced Web Development', progress: 75 },
    { course: 'Data Science Fundamentals', progress: 45 },
    { course: 'UI/UX Design Principles', progress: 90 },
  ];

  const certificates: Certificate[] = [
    {
      course: 'JavaScript Fundamentals',
      date: 'January 2024',
      image:
        'https://images.unsplash.com/photo-1496171367470-9ed9a91ea604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      course: 'React Development',
      date: 'February 2024',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className='max-w-4xl mx-auto space-y-6'>
      {/* Profile Header */}
      <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
        <div className='h-32 bg-gradient-to-r from-blue-500 to-blue-600' />
        <div className='px-6 pb-6'>
          <div className='flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt='Profile'
              className='h-24 w-24 rounded-full border-4 border-white object-cover'
              loading='lazy'
            />
            <div className='text-center sm:text-left'>
              <h1 className='text-2xl font-bold'>John Doe</h1>
              <p className='text-gray-600'>Web Development Student</p>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Personal Information */}
        <section className='lg:col-span-1 space-y-6'>
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Personal Information</h2>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Mail className='h-5 w-5 text-gray-400' />
                <span>john.doe@example.com</span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='h-5 w-5 text-gray-400' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='h-5 w-5 text-gray-400' />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Achievements</h2>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Award className='h-5 w-5 text-yellow-400' />
                <span>Top Student - Feb 2024</span>
              </div>
              <div className='flex items-center gap-3'>
                <Book className='h-5 w-5 text-blue-400' />
                <span>5 Courses Completed</span>
              </div>
              <div className='flex items-center gap-3'>
                <Clock className='h-5 w-5 text-green-400' />
                <span>48 Hours of Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* Course Progress and Certificates */}
        <section className='lg:col-span-2 space-y-6'>
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Course Progress</h2>
            <div className='space-y-4'>
              {courseProgress.map(({ course, progress }, i) => (
                <div key={i} className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span>{course}</span>
                    <span className='font-medium'>{progress}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-blue-600 h-2 rounded-full'
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <h2 className='text-lg font-semibold mb-4'>Certificates</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {certificates.map(({ course, date, image }, i) => (
                <div key={i} className='border border-gray-200 rounded-lg overflow-hidden'>
                  <img
                    src={image}
                    alt={course}
                    className='w-full h-32 object-cover'
                    loading='lazy'
                  />
                  <div className='p-4'>
                    <h3 className='font-medium'>{course}</h3>
                    <p className='text-sm text-gray-500'>{date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

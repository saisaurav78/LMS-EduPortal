import { BookOpen, Clock, Award, Users, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className='bg-white p-6 rounded-xl border border-gray-200'>
      <div className='flex items-center gap-4'>
        <div className='p-3 bg-gray-50 rounded-lg'>{icon}</div>
        <div>
          <h3 className='text-sm font-medium text-gray-500'>{title}</h3>
          <p className='text-2xl font-bold'>{value}</p>
        </div>
      </div>
    </div>
  );
}

interface CourseCardProps {
  image: string;
  title: string;
  progress: number;
  instructor: string;
  duration: string;
  students: number;
}

function CourseCard({ image, title, progress, instructor, duration, students }: CourseCardProps) {
  return (
    <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className='w-full h-48 object-cover'
      />
      <div className='p-6'>
        <h3 className='text-lg font-bold mb-2'>{title}</h3>
        <div className='mb-4'>
          <div className='flex justify-between text-sm text-gray-500 mb-1'>
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='bg-blue-600 h-2 rounded-full' style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className='flex items-center gap-4 text-sm text-gray-500'>
          <div className='flex items-center gap-1'>
            <Users className='h-4 w-4' />
            <span>{students} students</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='h-4 w-4' />
            <span>{duration}</span>
          </div>
        </div>
        <div className='mt-4 pt-4 border-t border-gray-100'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                src={`https://images.unsplash.com/photo-${
                  instructor === 'Sarah Johnson'
                    ? '1494790108377-be9c29b29330'
                    : '1507003211169-0a1dd7228f2d'
                }?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                alt={instructor}
                width={40}
                height={40}
                className='h-6 w-6 rounded-full object-cover'
              />
              <span className='text-sm font-medium'>{instructor}</span>
            </div>
            <Link
              href='/courses/1/playlist'
              className='flex items-center gap-1 text-blue-600 hover:text-blue-700'
            >
                <PlayCircle className='h-5 w-5' />
                <span className='text-sm font-medium'>Continue</span>
         
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className='space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <StatCard
          icon={<BookOpen className='h-6 w-6 text-blue-600' />}
          title='Enrolled Courses'
          value='12'
        />
        <StatCard
          icon={<Clock className='h-6 w-6 text-green-600' />}
          title='Hours Completed'
          value='48'
        />
        <StatCard
          icon={<Award className='h-6 w-6 text-purple-600' />}
          title='Certificates'
          value='5'
        />
      </div>

      <div>
        <h2 className='text-2xl font-bold mb-6'>Continue Learning</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <CourseCard
            image='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            title='Advanced Web Development'
            progress={75}
            instructor='Sarah Johnson'
            duration='8h 30m'
            students={234}
          />
          <CourseCard
            image='https://images.unsplash.com/photo-1535551951406-a19828b0a76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            title='Data Science Fundamentals'
            progress={45}
            instructor='Michael Chen'
            duration='12h 15m'
            students={189}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

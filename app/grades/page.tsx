'use client';

import { TrendingUp, Award, AlertCircle } from 'lucide-react';

interface GradeItem {
  course: string;
  assignment: string;
  score: number;
  totalPoints: number;
  submittedDate: string;
  feedback?: string;
  status: 'excellent' | 'good' | 'needs-improvement';
}

export default function Grades() {
  const grades: GradeItem[] = [
    {
      course: 'Advanced Web Development',
      assignment: 'Final Project',
      score: 95,
      totalPoints: 100,
      submittedDate: 'Mar 15, 2024',
      feedback: 'Excellent work! Great implementation of advanced React concepts.',
      status: 'excellent',
    },
    {
      course: 'Data Science Fundamentals',
      assignment: 'Data Analysis Report',
      score: 88,
      totalPoints: 100,
      submittedDate: 'Mar 12, 2024',
      feedback: 'Good analysis, but could improve visualization.',
      status: 'good',
    },
    {
      course: 'UI/UX Design Principles',
      assignment: 'User Research Project',
      score: 75,
      totalPoints: 100,
      submittedDate: 'Mar 10, 2024',
      feedback: 'Need more depth in user research methodology.',
      status: 'needs-improvement',
    },
  ];

  const calculateGPA = (grades: GradeItem[]): number => {
    const totalScore = grades.reduce(
      (acc, grade) => acc + (grade.score / grade.totalPoints) * 4,
      0,
    );
    return totalScore / grades.length;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600 bg-green-50';
      case 'good':
        return 'text-blue-600 bg-blue-50';
      case 'needs-improvement':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Grade Book</h1>
        <select className='border border-gray-200 rounded-lg px-3 py-2 bg-white'>
          <option>All Courses</option>
          <option>Current Semester</option>
          <option>Previous Semester</option>
        </select>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='p-3 bg-blue-50 rounded-lg'>
              <TrendingUp className='h-6 w-6 text-blue-600' />
            </div>
            <div>
              <p className='text-sm text-gray-500'>Current GPA</p>
              <p className='text-2xl font-bold'>{calculateGPA(grades).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='p-3 bg-green-50 rounded-lg'>
              <Award className='h-6 w-6 text-green-600' />
            </div>
            <div>
              <p className='text-sm text-gray-500'>Highest Grade</p>
              <p className='text-2xl font-bold'>95%</p>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl border border-gray-200 p-6'>
          <div className='flex items-center gap-4'>
            <div className='p-3 bg-yellow-50 rounded-lg'>
              <AlertCircle className='h-6 w-6 text-yellow-600' />
            </div>
            <div>
              <p className='text-sm text-gray-500'>Assignments Due</p>
              <p className='text-2xl font-bold'>3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grades Table */}
      <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-50'>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Course</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  Assignment
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Score</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Submitted</th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {grades.map((grade, index) => (
                <tr key={index} className='hover:bg-gray-50'>
                  <td className='px-6 py-4'>
                    <div className='font-medium'>{grade.course}</div>
                  </td>
                  <td className='px-6 py-4'>{grade.assignment}</td>
                  <td className='px-6 py-4'>
                    <div className='font-medium'>
                      {grade.score}/{grade.totalPoints}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {((grade.score / grade.totalPoints) * 100).toFixed(1)}%
                    </div>
                  </td>
                  <td className='px-6 py-4 text-gray-500'>{grade.submittedDate}</td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        grade.status,
                      )}`}
                    >
                      {grade.status.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className='bg-white rounded-xl border border-gray-200 p-6'>
        <h2 className='text-lg font-semibold mb-4'>Grade Distribution</h2>
        <div className='space-y-4'>
          {['A', 'B', 'C', 'D', 'F'].map((grade, index) => {
            const percentage = [40, 30, 20, 5, 5][index];
            return (
              <div key={grade} className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span>Grade {grade}</span>
                  <span>{percentage}%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-blue-600 h-2 rounded-full'
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

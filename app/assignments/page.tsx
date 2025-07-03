'use client';

import { useState } from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface AssignmentCardProps {
  title: string;
  course: string;
  dueDate: string;
  timeLeft: string;
  status: 'pending' | 'submitted' | 'overdue';
  score?: string;
}

function AssignmentCard({ title, course, dueDate, timeLeft, status, score }: AssignmentCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    submitted: 'bg-green-100 text-green-800',
    overdue: 'bg-red-100 text-red-800',
  };

  return (
    <div className='bg-white rounded-lg border border-gray-200 p-6'>
      <div className='flex justify-between items-start mb-4'>
        <div>
          <h3 className='text-lg font-semibold mb-1'>{title}</h3>
          <p className='text-gray-600'>{course}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className='flex items-center gap-4 text-sm text-gray-500'>
        <div className='flex items-center gap-1'>
          <Calendar className='h-4 w-4' />
          <span>Due: {dueDate}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Clock className='h-4 w-4' />
          <span>{timeLeft}</span>
        </div>
        {score && (
          <div className='flex items-center gap-1'>
            <span className='font-medium text-green-600'>{score}</span>
          </div>
        )}
      </div>

      {status === 'pending' && (
        <button className='mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors'>
          Start Assignment
        </button>
      )}
    </div>
  );
}

export default function Assignments() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'submitted' | 'overdue'>('all');

  const assignments = [
    {
      title: 'Final Project: Web Application',
      course: 'Advanced Web Development',
      dueDate: 'Mar 15, 2024',
      timeLeft: '3 days left',
      status: 'pending' as const,
    },
    {
      title: 'Data Analysis Report',
      course: 'Data Science Fundamentals',
      dueDate: 'Mar 12, 2024',
      timeLeft: 'Submitted 2 days ago',
      status: 'submitted' as const,
      score: '95/100',
    },
    {
      title: 'UI Design Portfolio',
      course: 'UI/UX Design Principles',
      dueDate: 'Mar 10, 2024',
      timeLeft: '2 days overdue',
      status: 'overdue' as const,
    },
  ];

  // Filter assignments based on filter state
  const filteredAssignments = assignments.filter((assignment) =>
    filter === 'all' ? true : assignment.status === filter,
  );

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Assignments</h1>
        <select
          className='border border-gray-200 rounded-lg px-3 py-2 bg-white'
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
        >
          <option value='all'>All Assignments</option>
          <option value='pending'>Pending</option>
          <option value='submitted'>Submitted</option>
          <option value='overdue'>Overdue</option>
        </select>
      </div>

      {filteredAssignments.some((a) => a.status === 'overdue') && (
        <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg'>
          <div className='flex'>
            <div className='flex-shrink-0'>
              <AlertCircle className='h-5 w-5 text-yellow-400' />
            </div>
            <div className='ml-3'>
              <h3 className='text-sm font-medium text-yellow-800'>Attention needed</h3>
              <div className='mt-2 text-sm text-yellow-700'>
                <p>
                  You have 1 or more overdue assignments. Please submit them as soon as possible or
                  contact your instructor if you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredAssignments.map((assignment, index) => (
          <AssignmentCard key={index} {...assignment} />
        ))}
      </div>
    </div>
  );
}

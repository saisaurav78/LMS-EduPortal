'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // State for current displayed month and year
  const [date, setDate] = useState(new Date());

  // Extract month/year from state date
  const currentMonth = date.toLocaleString('default', { month: 'long' });
  const currentYear = date.getFullYear();

  // Move to previous month
  function prevMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  }

  // Move to next month
  function nextMonth() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  }

  // Example events — update to use dynamic dates for the displayed month if you want
  type EventType = 'class' | 'assignment' | 'exam';

  interface CalendarEvent {
    time: string;
    title: string;
    type: EventType;
  }

  interface DayEvents {
    date: number;
    events: CalendarEvent[];
  }

  const events: DayEvents[] = [
    {
      date: 15,
      events: [
        { time: '10:00 AM', title: 'Web Development Live Session', type: 'class' },
        { time: '2:00 PM', title: 'Project Submission Deadline', type: 'assignment' },
      ],
    },
    {
      date: 18,
      events: [{ time: '11:00 AM', title: 'Data Science Quiz', type: 'exam' }],
    },
  ];

  const eventTypes: Record<EventType, string> = {
    class: 'bg-blue-100 text-blue-800 border-blue-200',
    assignment: 'bg-purple-100 text-purple-800 border-purple-200',
    exam: 'bg-red-100 text-red-800 border-red-200',
  };

  // Calculate number of days in current month
  const daysInMonth = new Date(currentYear, date.getMonth() + 1, 0).getDate();

  // Calculate day of week of first day of month
  const firstDayIndex = new Date(currentYear, date.getMonth(), 1).getDay();

  // Generate array for calendar grid (including blanks for offset)
  const calendarDays = [];

  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null); // empty cells before first day
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  // Today's date to highlight current day if month/year matches
  const today = new Date();
  const isCurrentMonthYear =
    today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Calendar</h1>
        <div className='flex items-center gap-4'>
          <button
            onClick={prevMonth}
            className='p-2 hover:bg-gray-100 rounded-lg'
            aria-label='Previous Month'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <span className='text-lg font-medium'>
            {currentMonth} {currentYear}
          </span>
          <button
            onClick={nextMonth}
            className='p-2 hover:bg-gray-100 rounded-lg'
            aria-label='Next Month'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
        {/* Calendar Header */}
        <div className='grid grid-cols-7 gap-px bg-gray-200'>
          {days.map((day) => (
            <div key={day} className='bg-gray-50 p-2 text-center text-sm font-medium text-gray-500'>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className='grid grid-cols-7 gap-px bg-gray-200'>
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={index} className='bg-white min-h-[120px] p-2'></div>; // empty cell
            }

            const dayEvents = events.find((e) => e.date === day);

            return (
              <div
                key={index}
                className={`bg-white min-h-[120px] p-2 ${
                  isCurrentMonthYear && day === today.getDate() ? 'bg-blue-50' : ''
                }`}
              >
                <span
                  className={`text-sm font-medium ${
                    isCurrentMonthYear && day === today.getDate()
                      ? 'text-blue-600'
                      : 'text-gray-900'
                  }`}
                >
                  {day}
                </span>

                {dayEvents && (
                  <div className='mt-2 space-y-1'>
                    {dayEvents.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`p-1 text-xs rounded border ${eventTypes[event.type]}`}
                      >
                        <div className='font-medium'>{event.time}</div>
                        <div className='truncate'>{event.title}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className='flex gap-4'>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-blue-500'></div>
          <span className='text-sm text-gray-600'>Classes</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-purple-500'></div>
          <span className='text-sm text-gray-600'>Assignments</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <span className='text-sm text-gray-600'>Exams</span>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

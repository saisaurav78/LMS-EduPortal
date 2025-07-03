'use client';

import { FileText, Download, ExternalLink, Search, Filter } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadDate: string;
  downloads: number;
  fileType: 'pdf' | 'doc' | 'video' | 'code';
}

export default function Resources() {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Web Development Best Practices Guide',
      description:
        'A comprehensive guide covering modern web development practices and techniques.',
      type: 'Document',
      size: '2.5 MB',
      uploadedBy: 'Sarah Johnson',
      uploadDate: 'Mar 15, 2024',
      downloads: 128,
      fileType: 'pdf',
    },
    {
      id: 2,
      title: 'Introduction to React Hooks',
      description: 'Video tutorial explaining React Hooks with practical examples.',
      type: 'Video',
      size: '45 MB',
      uploadedBy: 'Michael Chen',
      uploadDate: 'Mar 14, 2024',
      downloads: 256,
      fileType: 'video',
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      description: 'Course materials and practice problems for DSA fundamentals.',
      type: 'Document',
      size: '1.8 MB',
      uploadedBy: 'Emily Brown',
      uploadDate: 'Mar 13, 2024',
      downloads: 89,
      fileType: 'doc',
    },
    {
      id: 4,
      title: 'Sample Project Code',
      description: 'Example code repository for the final project implementation.',
      type: 'Code',
      size: '500 KB',
      uploadedBy: 'David Wilson',
      uploadDate: 'Mar 12, 2024',
      downloads: 167,
      fileType: 'code',
    },
  ];

  const fileTypeIcons = {
    pdf: 'text-red-500',
    doc: 'text-blue-500',
    video: 'text-purple-500',
    code: 'text-green-500',
  };

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
        <h1 className='text-2xl font-bold'>Learning Resources</h1>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
          Upload Resource
        </button>
      </div>

      {/* Search and Filter */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='md:col-span-3'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
              type='text'
              placeholder='Search resources...'
              className='pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>
        <div>
          <button className='w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50'>
            <Filter className='h-5 w-5' />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Resources Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {resources.map((resource) => (
          <div key={resource.id} className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-start justify-between'>
              <div className='flex items-start gap-4'>
                <div className={`p-3 bg-gray-50 rounded-lg ${fileTypeIcons[resource.fileType]}`}>
                  <FileText className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>{resource.title}</h3>
                  <p className='text-sm text-gray-500 mb-2'>{resource.description}</p>
                  <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.size}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 pt-4 border-t border-gray-100'>
              <div className='flex items-center justify-between text-sm'>
                <div className='text-gray-500'>
                  <p>Uploaded by {resource.uploadedBy}</p>
                  <p>{resource.uploadDate}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='p-2 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-gray-50'>
                    <Download className='h-5 w-5' />
                  </button>
                  <button className='p-2 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-gray-50'>
                    <ExternalLink className='h-5 w-5' />
                  </button>
                </div>
              </div>
              <div className='mt-2 text-sm text-gray-500'>{resource.downloads} downloads</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

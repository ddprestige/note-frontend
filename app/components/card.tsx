'use client';

import { Download } from 'lucide-react';

type SubjectCardProps = {
  subjectName: string;
  subjectCode: string;
  downloadLink: string;
};

export default function SubjectCard({
  subjectName,
  subjectCode,
  downloadLink,
}: SubjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-all p-6 flex flex-col justify-between w-full max-w-sm">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{subjectName}</h2>
        <p className="text-sm text-gray-500">Subject Code: <span className="font-medium">{subjectCode}</span></p>
      </div>

      <div className="mt-6">
        <a href={downloadLink} target="_blank" rel="noopener noreferrer">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition">
            <Download size={18} />
            View Notes
          </button>
        </a>
      </div>
    </div>
  );
}

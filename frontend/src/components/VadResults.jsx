import React from 'react';

const VadResults = ({ timestamps }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Silence Timestamps</h2>
      <ul className="list-disc pl-5">
        {timestamps.map((timestamp, index) => (
          <li key={index} className="mb-2">
            {timestamp}ms
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default VadResults;

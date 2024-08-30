import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import VadResults from './components/VadResults';
import axios from 'axios';

function App() {
  const [vadResults, setVadResults] = useState(null);

  const handleFileUpload = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData)
      .then(response => {
        setVadResults(response.data.silence_timestamps);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };


  return (
    <div className="App min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Voice Activity Detection (VAD)</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <FileUpload onFileUpload={handleFileUpload} />
      </div>
      {vadResults && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <VadResults timestamps={vadResults} />
        </div>
      )}
    </div>
  );

}

export default App;

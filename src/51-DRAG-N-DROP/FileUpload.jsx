import { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Drag and Drop File Upload</h2>
      <div
        style={{
          width: '300px',
          height: '200px',
          border: '2px dashed #ccc',
          textAlign: 'center',
          paddingTop: '50px',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div>
            <p>Selected File: {selectedFile.name}</p>
            <p>File Size: {selectedFile.size} bytes</p>
          </div>
        ) : (
          <p>Drag & drop file here, or click to select file</p>
        )}
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ marginTop: '20px' }}
      />
    </div>
  );
}

export default FileUpload;

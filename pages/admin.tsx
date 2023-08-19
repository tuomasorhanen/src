// AdminPage.tsx
import { uploadImagesToSanity } from '_lib/sanityUtils';
import React, { useState, ChangeEvent } from 'react';

function AdminPage() {
  const [images, setImages] = useState<File[]>([]);
  const [pageTitle, setPageTitle] = useState<string>('');
  const [password, setPassword] = useState<string>(''); // State for password
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  const handlePageTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageTitle(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => { // Handler for password
    setPassword(e.target.value);
  };

  const handleUploadClick = async () => {
    setIsUploading(true);
    await uploadImagesToSanity(images, pageTitle, password); // Pass the password here
    setIsUploading(false);
  };

  return (
    <div className="p-8 h-full flex flex-col justify-center items-center">
      <input
        type="password"
        placeholder='Password'
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        className="w-1/4 p-2 mb-4 border rounded-full text-white bg-black" // Same styling
      />
      <input
        type="text"
        placeholder='Page Title'
        id="pageTitle"
        name="pageTitle"
        value={pageTitle}
        onChange={handlePageTitleChange}
        className="w-1/4 p-2 mb-4 border rounded-full text-white bg-black"
      />
      <input type="file" id="fileInput" multiple onChange={handleImageUpload} className="block mb-4 w-1/4 rounded-full border border-gray-500 text-white" />
      <button
        onClick={handleUploadClick}
        className={`p-2 px-4 w-1/4 rounded-full text-white ${isUploading ? 'bg-green-500' : 'bg-blue-500'}`}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
      {isUploading && <div className="mt-2 italic">Uploading {images.length} files...</div>}
    </div>
  );
}

export default AdminPage;

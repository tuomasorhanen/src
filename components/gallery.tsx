import React, { useState } from 'react';
import { IImageGallery } from "_lib/types";
import Image from "./Image";
import { updateChosenImages } from '_lib/sanityUtils';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; // Import the heart icons


const Gallery = (props: IImageGallery) => {
  const { image, _type, _id, _key } = props;
  const [selectedImages, setSelectedImages] = useState<boolean[]>(new Array(image.length).fill(false));
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageSelect = (index: number) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = !newSelectedImages[index];
    setSelectedImages(newSelectedImages);
  };

  const handleUploadSelected = async () => {
    setUploading(true);
    const imagesToUpload = selectedImages.map((isSelected, index) => isSelected ? image[index] : null).filter(Boolean);
    try {
      await updateChosenImages(imagesToUpload, 'Etusivu');
      setUploadSuccess(true);
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadSuccess(false);
    }
    setUploading(false);
  };

  return (
    <section className="flex flex-col items-center justify-center p-8 py-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
      {image && image.map((images, index) => (
        <div key={index} className="relative overflow-hidden bg-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out transform">
          <div className="absolute top-0 right-0 z-20" onClick={() => handleImageSelect(index)}>
            {selectedImages[index] ? <AiFillHeart className='h-12 w-12' color="red" /> : <AiOutlineHeart className='h-12 w-12' />}
          </div>
          <Image {...images} alt="this" className="w-full h-auto transition-transform duration-300 ease-in-out transform" />
        </div>
      ))}
    </div>
    <button
        onClick={handleUploadSelected}
        className={`p-2 my-8 px-4 w-1/4 rounded-full text-white ${uploading ? 'bg-green-500' : 'bg-blue-500'}`}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploading && <div className="mt-2 italic">Uploading {selectedImages.filter(Boolean).length} files...</div>}
      {uploadSuccess && <p>Success!</p>}
    </section>
  );
}

export default Gallery;

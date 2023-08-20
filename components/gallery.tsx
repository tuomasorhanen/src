import React, { useEffect, useState } from 'react';
import { IImageGallery } from "_lib/types";
import Image from "./Image";
import { updateChosenImages} from '_lib/sanityUtils';
import { AiFillCheckCircle, AiOutlineCheckCircle, AiOutlineEye } from 'react-icons/ai';
import { client } from '_lib/client';
import CarouselComponent from './carousel';

const Gallery = (props: IImageGallery) => {
  const { image, _type, _id, _key } = props;
  const [selectedImages, setSelectedImages] = useState<boolean[]>(new Array(image.length).fill(false));
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [imagesSent, setImagesSent] = useState(false);
  const [totalSelected, setTotalSelected] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchChosenGallery = async () => {
      const chosenGallery = await getChosenGallery('Etusivu');
      if (chosenGallery && chosenGallery.image.length > 0) {
        const chosenRefs = chosenGallery.image.map(chosenImg => chosenImg.asset?._ref).filter(Boolean);
        const selectedImagesArray = image.map(img => chosenRefs.includes(img.asset?._ref));
        setSelectedImages(selectedImagesArray);
        setImagesSent(true);
        setTotalSelected(chosenRefs.length);
        setTotalPrice(chosenRefs.length * 1); // 1€ per image
      }
    };
  
    fetchChosenGallery();
  }, [image]);

  const handleCarouselOpen = (index: number) => {
    if (totalSelected > 0) return; // Return early if items are selected
    setCurrentImageIndex(index);
    setCarouselOpen(true);
  };
  
  const handleImageClick = (index: number) => {
    if (totalSelected === 0) {
      handleCarouselOpen(index);
    } else {
      handleImageSelect(index);
    }
  };

  const handleCarouselClose = () => {
    setCarouselOpen(false);
    setCurrentImageIndex(null);
  };
  

  const handleImageSelect = (index: number) => {
    if (imagesSent) return; // Ignore clicks if images have been sent
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = !newSelectedImages[index];
    setSelectedImages(newSelectedImages);
  };

  useEffect(() => {
    if (!imagesSent) {
      const selectedCount = selectedImages.filter(Boolean).length;
      setTotalSelected(selectedCount);
      setTotalPrice(selectedCount * 1); // 1€ per image
    }
  }, [selectedImages, imagesSent]);

  const handleUploadSelected = async () => {
    if (imagesSent) return; // Ignore if images have been sent
    setUploading(true);
    const imagesToUpload = selectedImages.map((isSelected, index) => isSelected ? image[index] : null).filter(Boolean);
    try {
      await updateChosenImages(imagesToUpload, 'Etusivu');
      setUploadSuccess(true);
      setImagesSent(true); // Mark images as sent
    } catch (error) {
      console.error("Upload failed:", error);
      setUploadSuccess(false);
    }
    setUploading(false);
  };

  return (
    <>
         {carouselOpen && currentImageIndex !== null && (
      <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
        <button onClick={handleCarouselClose} className="absolute top-4 right-4 text-white">Close</button>
        <div className=''><CarouselComponent image={image} /></div>
        
      </div>
    )}
      <div className="flex justify-between p-4 w-full bg-accent h-full items-center">
        <h3>Selected Images: {totalSelected}</h3>
        <p>Total Price: {totalPrice}€</p>
        <button
          onClick={handleUploadSelected}
          className={`p-2 px-4 rounded-full ${uploading ? 'bg-green-500' : 'bg-bg'}`}
          disabled={uploading || imagesSent}
        >
          {uploading ? 'Sending...' : imagesSent ? 'Images Sent' : 'Send selected images'}
        </button>
      </div>
      <section className="flex flex-col items-center justify-center p-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 w-full max-w-6xl">
          {image && image.map((images, index) => (
    <button key={index} onClick={() => handleImageClick(index)} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
    <div className="absolute top-0 left-0 z-40" onClick={() => handleImageSelect(index)}>
                {selectedImages[index] ? <AiFillCheckCircle className='h-8 w-8' /> : <AiOutlineCheckCircle className='h-8 w-8' />}
              </div>
              <Image {...images} alt="this" className={`w-full h-auto ${selectedImages[index] ? 'opacity-50' : 'opacity-100'}`} />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;


export const getChosenGallery = async (pageTitle: string) => {
  const page = await client.fetch(`*[_type == 'page' && title == $title][0]`, { title: pageTitle });
  return page?.chosenImages || null;
};
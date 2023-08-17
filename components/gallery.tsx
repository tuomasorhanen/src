import React from 'react';
import { IImageGallery } from "_lib/types";
import Image from "./Image";

const Gallery = (props: IImageGallery) => {
  const { image } = props;

  return (
    <section className="flex flex-col items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {image && image.map((image, index) => (
          <div key={index} className="relative overflow-hidden bg-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Image {...image} alt="this" className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

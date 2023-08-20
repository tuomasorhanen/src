import React from 'react';
import { IImageGallery } from '_lib/types';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "./Image";

const CarouselComponent = (props: IImageGallery) => {
    const { image } = props;

    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button 
                type="button" 
                onClick={onClickHandler} 
                title={label} 
                className="absolute z-10 top-1/2 left-0 ml-3 -mt-5 lg:ml-5 text-white hover:bg-accent hover:text-white hover:rounded-full p-2 transition-all duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        );

    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button 
                type="button" 
                onClick={onClickHandler} 
                title={label} 
                className="absolute z-10 top-1/2 right-0 mr-3 -mt-5 lg:mr-5 text-white hover:bg-accent hover:text-white hover:rounded-full p-2 transition-all duration-300 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        );

    const renderIndicator = (onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li className="inline-block mr-3">
                    <button
                        className="block text-accent w-2 h-2 rounded-full bg-accent"
                        onClick={onClickHandler}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                </li>
            );
        }
        return (
            <li className="inline-block mr-3">
                <button
                    className="block text-accent w-2 h-2 rounded-full bg-white"
                    onClick={onClickHandler}
                    aria-label={`Slide ${index + 1}`}
                ></button>
            </li>
        );
    };

    return (
        <div className="max-w-7xl mx-auto h-full  bg-black">
            <Carousel 
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
                renderIndicator={renderIndicator}
            >
                {image.map((img, index) => (
                    <div key={index} className="relative sm:px-16 h-screen">
                        {img && <Image {...img} className="absolute inset-0 h-full w-full object-contain" alt="" />}
                    </div>                  
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;

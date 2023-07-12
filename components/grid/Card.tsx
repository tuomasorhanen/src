// Card.tsx
import { useState } from 'react';

import { ICard } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';
import ButtonRenderer from '../../components/ButtonRenderer';
import Image from '../../components/Image';

const Card = (props: ICard) => {
  const { blockContent, image, layout, buttons } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  switch (layout) {
    case 'simple':
      return (
        <div>
        <div key={props._key} className="borderstyle rounded-lg p-6 shadow-lg text-center">
          <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
                  <div className="-mt-6 flex justify-center">
                  {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
                </div>
                </div>
      );
    case 'image-top':
      return (
        <div key={props._key}>
          {image && (
            <div className="borderstyle shadow-lg">
              <Image {...image} alt="" className="h-48 w-full object-cover" />
              <div className="px-6 pb-8 pt-4">
                <BlockContentRenderer blockContent={blockContent && blockContent} />
              </div>
            </div>
          )}
          <div className="-mt-6 flex justify-center">
            {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
          </div>
        </div>
      );
    case 'image-top-rounded-full':
      return (
        <div key={props._key} className="pb-16">
          {image && <Image {...image} alt="" className="z-10 mx-auto h-32 w-32 rounded-full object-cover shadow-lg" />}
          <figure className="-mt-16 rounded-lg border-2 shadow-2xl">
            <div className="mx-auto p-4 pb-8 pt-20 text-center">
              <BlockContentRenderer blockContent={blockContent && blockContent} />
            </div>
          </figure>
          <div className="-mt-8 flex justify-center">
            {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
          </div>
        </div>
      );
    case 'image-reveal':
      return (
        <div key={props._key} className="relative">
          <div className="">
            <div className="relative flex justify-center bg-black hover:bg-gray-600 text-white ">
              {image && <Image {...image} alt="" className="opacity-70 aspect-video object-cover w-full " />}
              <div className="absolute inset-0 flex items-center justify-center p-5">
                <div className="flex flex-col items-center justify-center text-center">
                  <BlockContentRenderer blockContent={blockContent && blockContent} />
                  <div className="mt-2">
                    {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      

    default:
      return <></>;
  }
};

export default Card;

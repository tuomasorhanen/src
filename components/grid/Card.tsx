// Card.tsx
import Link from 'next/link';
import { ICard } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';
import ButtonRenderer from '../../components/ButtonRenderer';
import Image from '../../components/Image';

const Card = (props: ICard) => {
  const { blockContent, image, layout, buttons } = props;

  switch (layout) {
    case 'simple':
      return (
        <div>
          <div key={props._key} className="borderstyle rounded-lg p-6 text-center shadow-lg">
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
    <Link key={props._key}     href={buttons && buttons[0].navigateToPage || '/etusivu'} 
    className="flex flex-col py-4 md:py-0" style={{ minHeight: '100%' }}>
      {image && <Image {...image} alt="" className="z-50 mx-auto h-28 w-28 rounded-full object-cover shadow-lg" />}
      <figure className="z-10 -mt-16 flex-grow rounded-lg shadow-lg">
        <div className="mx-auto h-full p-4 pt-20 text-center">
          <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      </figure>
    </Link>
  );

      

    case 'image-reveal':
      return (
        <div key={props._key} className="relative">
          <div className="">
            <div className="relative flex justify-center bg-black text-white hover:bg-gray-600 ">
              {image && <Image {...image} alt="" className="aspect-video w-full object-cover opacity-70 " />}
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

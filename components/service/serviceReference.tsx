import Link from 'next/link';
import { IService } from '../../_lib/types';
import Image from '../../components/Image';

const ServiceReferenceSection = (props: IService) => {
  const { description, title, slug, duration, mainImage, _type, price, _key, _id } = props;

  return (
    <div key={props._key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative">
      <Image {...mainImage} alt="" className="h-48 w-full object-cover" />
      <div className="absolute top-0 right-0 bg-white bg-opacity-70 rounded-bl-lg p-2 font-extrabold">
        <p className="">{price} €</p>
        <p className="">{duration} min</p>
      </div>
      <div className="px-6 py-4">
        <Link href={`/${slug.current}`}>
          <div className="flex justify-center items-center">
            <h2 className="text-center text-2xl font-bold">{title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceReferenceSection;

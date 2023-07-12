import Link from 'next/link';

import { IPost } from '../../_lib/types';
import Image from '../../components/Image';

const BlogReferenceSection = (props: IPost) => {
  const { excerpt, mainImage, readingTime, title, person, slug } = props;

  return (
    <div key={props._key} className="borderstyle rounded-lg shadow-lg">
      <Image {...mainImage} alt="" className="h-48 w-full object-cover" />
      <div className="px-6 py-4">
        <Link href={`/blog/${slug.current}`}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2">{excerpt}</p>
        </Link>
        <div className="mt-4 flex">
          <Image {...person.image} alt={person.name} className="mr-4 h-16 w-16 rounded-full object-cover shadow-md" />
          <div className="flex flex-col text-opacity-50">
            <p>{readingTime} min</p>
            <p>{person.name}</p>
            <p>{person.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReferenceSection;

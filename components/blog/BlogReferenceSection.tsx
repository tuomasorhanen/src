import Link from 'next/link';

import { IPost } from '../../_lib/types';
import Image from '../../components/Image';

const BlogReferenceSection = (props: IPost) => {
  const { excerpt, mainImage, readingTime, title, person, slug } = props;

  return (
    <div key={props._key} className="borderstyle rounded-lg shadow-lg">
      <Image {...mainImage} alt="" className="h-48 w-full object-cover rounded-t-lg" />
      <div className="px-6 py-4">
        <Link href={`/blog/${slug.current}`}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2">{excerpt}</p>
        </Link>
        
      </div>
    </div>
  );
};

export default BlogReferenceSection;

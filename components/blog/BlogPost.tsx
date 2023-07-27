import { IPost } from '_lib/types';

import BlockContentRenderer from '../BlockContentRenderer';

const BlogPost = (props: IPost) => {
  const { person, readingTime, categories, blockContent } = props;

  return (
    <div key={props._key} className="">
      <div className="sm:-px-6 mx-auto max-w-3xl px-6 pb-12 lg:max-w-4xl">
        <BlockContentRenderer blockContent={blockContent && blockContent} />
      </div>
    </div>
  );
};

export default BlogPost;

import { IBall } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';

const Ball = (props: IBall) => {
  const { blockContent, opacity } = props;
  const overlayOpacity = opacity ? opacity / 100 : 1;

  return (
    <div key={props._key} className="mx-auto">
      <div
        className=" customgradient aspect-square rounded-full text-center shadow-lg"
        style={{ opacity: overlayOpacity }}>
        <div className="flex h-full items-center justify-center">
          <BlockContentRenderer blockContent={blockContent && blockContent} />
        </div>
      </div>
    </div>
  );
};

export default Ball;

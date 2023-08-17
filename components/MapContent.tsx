import { IHeadingAndTitle, IImageGallery} from '../_lib/types';
import Gallery from './gallery';
import HeadingAndTitle from './headingandTitle/HeadingAndTitle';

type IMapContentProps = {
  content:IHeadingAndTitle[] | IImageGallery[];
};

const MapContent = ({ content }: IMapContentProps) => {
  return (
    <div className="overflow-hidden">
      {content.map(item => {
        switch (item._type) {
          case 'headingAndTitle':
            return <HeadingAndTitle key={item._key} {...item} />
          case 'imageGallery':
            return <Gallery key={item._key} {...item} />
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;

import { IHeadingAndTitle} from '../_lib/types';
import HeadingAndTitle from './headingandTitle/HeadingAndTitle';

type IMapContentProps = {
  content:IHeadingAndTitle[];
};

const MapContent = ({ content }: IMapContentProps) => {
  return (
    <div className="overflow-hidden">
      {content.map(item => {
        switch (item._type) {
          case 'headingAndTitle':
            return <HeadingAndTitle key={item._key} {...item} />
          default:
            break;
        }
      })}
    </div>
  );
};

export default MapContent;

import { ISpacer } from '../_lib/types';

const Spacer = (props: ISpacer) => {
  const { Size } = props;

  const getClassName = () => {
    switch (Size) {
      case 'small':
        return 'py-4 md:py-8';
      case 'medium':
        return 'py-12 sm:py-16';
      case 'large':
        return 'py-12 sm:py-28';
      default:
        return '';
    }
  };

  return <div key={props._key} className={getClassName()}></div>;
};

export default Spacer;

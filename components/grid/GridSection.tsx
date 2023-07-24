import { useEffect, useState } from 'react';
import { ICard, IGrid, IPerson, IPost } from '../../_lib/types';
import BlogReferenceSection from '../../components/blog/BlogReferenceSection';
import Card from './Card';
import PersonReferenceSection from './PersonReference';

interface GridSectionProps extends IGrid {}

const CardItem = (item: ICard) => {
  return <Card {...item} />;
};
const PostItem = (item: IPost) => {
  return <BlogReferenceSection {...item} />;
};
const PersonItem = (item: IPerson) => {
  return <PersonReferenceSection {...item} />;
};

const GridSection = (props: GridSectionProps) => {
  const { columns, items } = props;

  const [columnStyles, setColumnStyles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let numColumns = 1;

      if (screenWidth >= 1920) {
        numColumns = parseInt(columns.extraLarge);
      } else if (screenWidth >= 1100) {
        numColumns = parseInt(columns.large);
      } else if (screenWidth >= 700) {
        numColumns = parseInt(columns.medium);
      } else {
        numColumns = parseInt(columns.small);
      }

      setColumnStyles({ gridTemplateColumns: `repeat(${numColumns}, 1fr)` });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [columns]);

  const itemsArray = Array.isArray(items) ? items : [items];

  const renderGridItem = (item: ICard | IPost | IPerson) => {
    if (item._type === 'card') {
      return CardItem(item as ICard);
    } else if (item._type === 'post') {
      return PostItem(item as IPost);
    } else if (item._type === 'person') {
      return PersonItem(item as IPerson);
    } else {
      return <>Empty grid</>;
    }
  };

  return (
    <section>
      <div key={props._key} className="mx-auto grid max-w-7xl gap-8 px-2 py-8 sm:px-4 md:px-8" style={columnStyles}>
        {itemsArray.map(item => (
          <div key={item._key}>{renderGridItem(item)}</div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;

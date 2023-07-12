import { ICategory } from '../../_lib/types';

type CategoryFilterProps = {
  categories: ICategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
};

const CategoryFilter = (props: CategoryFilterProps) => {
  const { categories, selectedCategory, onCategorySelect } = props;

  return (
    <div className="flex flex-wrap justify-center px-2 pt-8 md:pt-0">
      {categories.map(category => (
        <button
          key={category._id}
          className={` mt-2 sm:text-sm md:text-lg ${
            selectedCategory === category._id ? 'button bg-accent text-white' : 'button'
          }`}
          onClick={() => onCategorySelect(category._id)}>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

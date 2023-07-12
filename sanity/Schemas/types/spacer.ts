import Spacer from 'components/Spacer';
import { defineField } from 'sanity';

const spacer = defineField({
  name: 'spacer',
  title: 'Spacer',
  type: 'object',
  validation: Rule => Rule.required(),
  fields: [
    {
      title: 'size',
      name: 'Size',
      type: 'string',
      options: {
        list: [
          {
            title: 'small',
            value: 'small',
          },
          {
            title: 'medium',
            value: 'medium',
          },
          {
            title: 'large',
            value: 'large',
          },
        ],
      },
    },
  ],
});

export default spacer;

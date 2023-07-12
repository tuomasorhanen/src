import { GiNinjaHeroicStance } from 'react-icons/gi';

const Hero = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: GiNinjaHeroicStance,
  fields: [
    {
      name: 'blockContent',
      title: 'Block Content',
      type: 'array',
      of: [{ type: 'blockContent' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'layout',
      title: 'Hero Layout',
      type: 'string',
      options: {
        list: [
          { title: 'image-bg-center', value: 'image-bg-center' },
          { title: 'image-bg-left', value: 'image-bg-left' },
          { title: 'image-bg-center-slim', value: 'image-bg-center-slim' },
          { title: 'image-bg-left-slim', value: 'image-bg-left-slim' },
          { title: 'slash-right', value: 'slash-right' },
          { title: 'simple-image-right', value: 'simple-image-right' },
          { title: 'circle-overlap-left', value: 'circle-overlap-left' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
    },
    {
      name: 'opacity',
      title: 'Background Opacity',
      type: 'number',
      options: {
        list: [
          { title: '10', value: 10 },
          { title: '20', value: 20 },
          { title: '30', value: 30 },
          { title: '40', value: 40 },
          { title: '50', value: 50 },
          { title: '75', value: 75 },
          { title: '80', value: 80 },
          { title: '90', value: 90 },
          { title: '100', value: 100 },
        ],
      },
    },
    {
      name: 'customColors',
      title: 'Custom Colors',
      type: 'boolean',
    },
    {
      name: 'heroTextColor',
      title: 'Text Color',
      type: 'color',
      hidden: ({ parent }) => !parent.customColors,
    },
    {
      name: 'heroBgColor',
      title: 'Background Color',
      type: 'color',
      hidden: ({ parent }) => !parent.customColors,
    },
  ],
};
export default Hero;

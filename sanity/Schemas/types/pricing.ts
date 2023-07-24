import { defineField } from 'sanity';

const Pricing = defineField({
    name: 'pricing',
    title: 'Pricing',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => [Rule.required().error('A title is required.')],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string',
        },
        {
            name: 'button',
            title: 'Button',
            type: 'reference',
            to: [{ type: 'landingPage' }],
        },
    ],
});

export default Pricing;

const chosenGallery = {
    name: 'chosenGallery',
    title: 'Chosen Gallery',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
        },
    ],
};

export default chosenGallery;
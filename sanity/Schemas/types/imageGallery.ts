const ImageGallery = {
    name: 'imageGallery',
    title: 'Image Gallery',
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

export default ImageGallery;
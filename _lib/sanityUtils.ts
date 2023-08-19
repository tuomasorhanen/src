import sanityClient from '@sanity/client';
import { v4 as uuidv4 } from 'uuid'; 

const client = sanityClient({
  projectId: 'zg3slpnu',
  dataset: 'production',
  token: 'skqNvA2862WpADlS9iBA8BLpiG8yIR0Sz5n0grScGNjfpQKHhjhjDIgaQRfGfp3JmmtaIw4bqFDviX17qMU9hcXDhfOktn7jRjABg5OGSyGlTM6hjGrZE8A82zVcnVW0985TOf2tqnrxEtKXGduU1nLuLZu9Sy0fCRVr70iJTelWUGeMsoHI', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export const uploadImagesToSanity = async (images: File[], pageTitle: string, password: string) => {
    // Check if the password is correct
    if (password !== 'testing123') {
      console.error('Incorrect password. Upload operation aborted.');
      return;
    }

    const page = await client.fetch(`*[_type == 'page' && title == $title][0]`, { title: pageTitle });

    if (!page) {
      console.error(`Page with title "${pageTitle}" not found.`);
      return;
    }
  
    let imageGallery = page.content?.find((item: any) => item._type === 'imageGallery');
  if (!imageGallery) {
    imageGallery = { _type: 'imageGallery', _key: uuidv4(), image: [] };
    await client
      .patch(page._id)
      .setIfMissing({ content: [] })
      .append('content', [imageGallery])
      .commit();
  }

  // Loop through the images and upload each one
  for (const image of images) {
    const asset = await client.assets.upload('image', image);
    const key = uuidv4();

    // Append the uploaded image to the image array in the imageGallery object
    await client
      .patch(page._id)
      .setIfMissing({ 'content[]._type': 'imageGallery', 'content[].image': [] })
      .append(`content[_key == "${imageGallery._key}"].image`, [
        {
          _type: 'image',
          _key: key,
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
      ])
      .commit();
  }
};

export const updateChosenImages = async (images, pageTitle) => {
    const page = await client.fetch(`*[_type == 'page' && title == $title][0]`, { title: pageTitle });
  
    if (!page) {
      console.error(`Page with title "${pageTitle}" not found.`);
      return;
    }
  
    let chosenGallery = page.chosenImages || { _type: 'chosenGallery', _key: uuidv4(), image: [] };
  
    // Add the selected images to the chosenGallery
    for (const image of images) {
      const key = uuidv4();
      await client
        .patch(page._id)
        .setIfMissing({ 'chosenImages.image': [] })
        .append(`chosenImages.image`, [
          {
            _type: 'image',
            _key: key,
            asset: image.asset,
          },
        ])
        .commit();
    }
  };
  
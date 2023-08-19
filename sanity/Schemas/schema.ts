import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/page';
import siteSettings from './Site Settings/siteSettings';
import headingAndTitle from './types/headingAndTitle';
import ImageGallery from './types/imageGallery';
import chosenGallery from './types/chosenGallery';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //Documents
    Page,
    siteSettings,

    //Objects
    headingAndTitle,
    ImageGallery,
    chosenGallery,
  ],
};

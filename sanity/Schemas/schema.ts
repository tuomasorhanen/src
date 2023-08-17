import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/page';
import siteSettings from './Site Settings/siteSettings';
import headingAndTitle from './types/headingAndTitle';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //Documents
    Page,
    siteSettings,

    //Objects
    headingAndTitle,
  ],
};

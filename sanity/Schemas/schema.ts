import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/page';
import LandingPage from './Page Builder/landingPage';
import siteSettings from './Site Settings/siteSettings';
import post from './Blog/post';
import person from './Blog/person';
import category from './Blog/category';
import blockContent from './types/block-content';
import Card from './types/card';
import columns from './types/columns';
import CustomButton from './types/customButton';
import grid from './types/grid';
import lineBreak from './types/lineBreak';
import uiElement from './types/uiElement';
import Hero from './types/Hero';
import spacer from './types/spacer';
import textContent from './types/textContent';
import pricing from './types/pricing';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //Documents
    Page,
    LandingPage,
    siteSettings,
    post,
    person,
    category,

    //Objects
    textContent,
    blockContent,
    Card,
    columns,
    CustomButton,
    grid,
    Hero,
    lineBreak,
    uiElement,
    spacer,
    pricing,
  ],
};

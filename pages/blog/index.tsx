import { GetServerSideProps } from 'next';
import { groq } from 'next-sanity';
import { useState } from 'react';

import { client } from '../../_lib/client';
import { ICategory, IPost, ISiteSettings } from '../../_lib/types';
import BlogSection from '../../components/blog/BlogSection';
import CategoryFilter from '../../components/blog/CategoryFilter';
import MyFooter from '../../components/footer/Footer';
import Header, { IMenuItem } from '../../components/header/Header';
import SocialButtons from 'components/social buttons/SocialButtons';

type IPageProps = {
  blogs: IPost[];
  categories: ICategory[];
  menu: IMenuItem[];
  settings: ISiteSettings;
};

const Blogs = (props: IPageProps) => {
  const { blogs, menu, categories, settings } = props;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.categories && blog.categories.some(category => category._ref === selectedCategory))
    : blogs;

  return (
    <>
      <Header items={menu} settings={settings} />
      <div
        className="container mx-auto py-8
      md:py-16">
        <div className=' md:py-16 text-black text-center pb-2 font-heading text-3xl sm:text-5xl md:text-6xl '>Ajankohtaista</div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        {filteredBlogs.map(post => (
          <BlogSection key={post._key} post={post} categories={categories} />
        ))}
      </div>
      <MyFooter items={menu} />
      <style jsx global>{`
        :root {
          --bg-color: ${settings.bgColor.hex};
          --text-color: ${settings.textColor.hex};
          --accent-color: ${settings.accentColor.hex};
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const pageQuery = groq`
    *[_type == 'page' && name == 'ajankohtaista']
  `;
  const blogsQuery = groq`
*[_type == 'post']{
  _id,
  _key,
  excerpt,
  mainImage,
  readingTime,
  title,
  slug,
  categories,
  person->{
    _id,
    name,
    role,
    image
  }
}
`;
  const categoriesQuery = groq`
  *[_type == 'category']
`;
  const menuQuery = groq`
  *[_type == 'page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
  } | order(menuOrder asc)`;

  const siteSettingsQuery = groq`
  *[_type == 'siteSettings'][0]
`;

  let [pageResponse, blogsResponse, menuResponse, categoriesResponse, siteSettingsResponse] = await Promise.all([
    client.fetch(pageQuery).catch(console.error),
    client.fetch(blogsQuery).catch(console.error),
    client.fetch<IMenuItem[]>(menuQuery),
    client.fetch(categoriesQuery).catch(console.error),
    client.fetch(siteSettingsQuery),
  ]);

  return {
    props: {
      blogs: blogsResponse,
      menu: menuResponse,
      categories: categoriesResponse,
      settings: siteSettingsResponse,
    },
  };
};

export default Blogs;

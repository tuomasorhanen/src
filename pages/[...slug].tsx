import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { groq } from 'next-sanity';
import { client } from '../_lib/client';
import { IHeadingAndTitle, IImageGallery, ISiteSettings } from '../_lib/types';
import MapContent from '../components/MapContent';
type IPageProps = {
  name: string;
  title: string;
  description: string;
  content: IHeadingAndTitle[] | IImageGallery[];
  settings: ISiteSettings;
};

const IndexPage = (props: IPageProps) => {
  const { content, settings, name, description } = props;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <MapContent content={content} />
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
  context.res.setHeader('Cache-Control', 'no-store');

  let { slug } = context.query;

  const pageQuery = groq`
    *[_type == 'page' && slug.current == '${slug}'][0]
  `;

  let pageResponse = await client.fetch(pageQuery);

  if (pageResponse == null) {
    return {
      notFound: true,
    };
  }

  const siteSettingsQuery = groq`
  *[_type == 'siteSettings'][0]
`;

  let [siteSettingsResponse] = await Promise.all([
    client.fetch(siteSettingsQuery),
  ]);

  const { name, title, description } = pageResponse;

  return {
    props: {
      name,
      title,
      description,
      content: pageResponse.content,
      settings: siteSettingsResponse,
    },
  };
};

export default IndexPage;

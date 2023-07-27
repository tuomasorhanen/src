import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { IPage } from '_lib/types';

const resolveReferences = async (page: IPage) => {
  const { content } = page;

  if (!content) {
    return page;
  }

  const resolvedContent = await Promise.all(
    content.map(async (item: any) => {
      const { _type } = item;

      switch (_type) {
        case 'pricing':
          if (item.service && Array.isArray(item.service)) {
            item.service = await Promise.all(
              item.service.map(async (service: any) => {
                if (service._ref) {
                  const serviceQry = groq`*[_id == '${service._ref}']{
                    _id,
                    title,
                    description,
                    price,
                    duration,
                    mainImage,
                    slug,
                    ...
                  }[0]`;
                  const serviceData = await client.fetch(serviceQry);
                  return { ...serviceData }; // Update to return serviceData directly
                }
                return service;
              })
            );
          }
          break;
        case 'grid':
          item.items = await Promise.all(
            item.items.map(async (gridItem: any) => {
              const { _ref, _type } = gridItem;

              if (gridItem._type === 'blog' && _ref) {
                const blogQry = groq`*[_id == '${_ref}']{
                  _id,
                  title,
                  excerpt,
                  mainImage,
                  slug,
                  person,
                  ...
                }[0]`;
                const blogData = await client.fetch(blogQry);

                // Fetch person data separately
                if (blogData.person && blogData.person._ref) {
                  const personQry = groq`*[_id == '${blogData.person._ref}']{
                    _id,
                    name,
                    role,
                    image,
                    _type,
                    email,
                    number
                  }[0]`;
                  const personData = await client.fetch(personQry);
                  blogData.person = personData;
                }
                return blogData;
              } else if (gridItem._type === 'person' && _ref) {
                const personQry = groq`*[_id == '${_ref}']{
                  _id,
                  name,
                  role,
                  image,
                  _type,
                  email,
                    number
                }[0]`;
                const personData = await client.fetch(personQry);
                return personData;
              } else if (_type === 'service' && _ref) {
                const serviceQry = groq`*[_id == '${_ref}']{
          _id,
          title,
          description,
          price,
          duration,
          mainImage,
          slug,
          _type,
          ...
        }[0]`;
                const serviceData = await client.fetch(serviceQry);

                return serviceData;
              } else {
                return gridItem;
              }
            })
          );
          break;
        case 'blog':
          if (item.person && item.person._ref) {
            const personQry = groq`*[_id == '${item.person._ref}']{
              _id,
              name,
              role,
              image,
            }[0]`;
            const personData = await client.fetch(personQry);
            item.person = personData;
          }
          break;
        case 'person':
          break;
          case 'reference':
          if (item._ref) {
            const serviceQry = groq`*[_id == '${item._ref}']{
              _id,
              title,
              description,
              price,
              duration,
              mainImage,
              slug,
              _type,
              ...
            }[0]`;
            const serviceData = await client.fetch(serviceQry);
            return serviceData;
          }
          break;
        default:
          break;
      }

      return item;
    })
  );

  page.content = resolvedContent;
  return page;
};

export default resolveReferences;

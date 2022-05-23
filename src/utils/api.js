import { GraphQLClient } from 'graphql-request';

export const api = async (query) => {
  try {
    const graphcms = new GraphQLClient(
      `${process.env.API_ADDRESS}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );

    const answer = await graphcms.request(`${query}`);
    return answer;
  } catch (e) {
    console.log({ ERROR: e });
    return [];
  }
};

export const photosessions = async () => {
  const data = await api(
    `query photosessions {
  categories {
    id
    description {
      html
      text
    }
    image {
      url(transformation: {document: {output: {format: webp}}})
    }
    photosessions(first: 5, orderBy: date_DESC) {
      place {
        map {
          latitude
          longitude
        }
        location
      }
      category {
        slug
      }
      author {
        name
        picture {
          url(transformation: {document: {output: {format: webp}}, image: {resize: {fit: crop, height: 65, width: 65}}})
        }
      }
      id
      date
      excerpt
      content {
        html
        text
      }
      coverImage {
        url(transformation: {document: {output: {format: webp}}, image: {resize: {height: 536, width: 536, fit: crop}}})
      }
      images {
        id
      }
      slug
        persons {
          avatar {
            url(
              transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 100, width: 100}}}
            )
          }
          name
        }
      tags(first: 4) {
        slug
        title
        color
      }
      title
    }
    slug
    title
  }
}
`,
  );
  return data.categories;
};

export const photosession = async (slug) => {
  const data = await api(
    `
{
  photosession(where: {slug: "${slug}"}) {
    id
    author {
      id
      name
      photosessions {
        slug
      }
      picture {
        url(transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 100, width: 100}}})
      }
      title
    }
    category {
      photosessions {
        slug
        title
      }
      product {
        slug
        title
      }
      publishedAt
      slug
      title
    }
    content {
      html
      text
    }
    date
    excerpt
    images {
      url
    }
    seo {
      title
      keywords
      description
    }
    updatedAt
    coverImage {
            url(
        transformation: {image: {resize: {height: 560, width: 1920, fit: crop}}, document: {output: {format: webp}}}
      )
    }
    publishedAt
    slug
    title
    tags {
      slug
      title
      description {
        html
        text
      }
    }
    place {
      location
      map {
        latitude
        longitude
      }
    }
        persons {
          avatar {
            url(
              transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 100, width: 100}}}
            )
          }
          name
        }
  }
}`,
  );
  return data.photosession;
};

export const photosessionsPaths = async () => {
  const { photosessions } = await api(
    `query photosessionsPaths {
  photosessions {
    slug
    category {
      slug
    }
  }
}`,
  );
  return photosessions || [];
};
export const categoriesPaths = async () => {
  const { categories } = await api(
    `    {
  categories {
    slug
  }
    }`,
  );
  return categories || [];
};
export const category = async (slug) => {
  const { category } = await api(
    `query category {
  category(where: {slug: "${slug}"}) {
    description {
      html
      text
    }
    image {
      url
    }
    photosessions(first: 3, orderBy: date_DESC) {
      author {
        name
        picture {
          url
        }
        title
      }
      content {
        text
        html
      }
      coverImage {
        url
      }
      images(first: 5) {
        url
      }
      slug
      tags {
        slug
        title
      }
    }
    slug
    title
  }
}`,
  );
  return category || [];
};
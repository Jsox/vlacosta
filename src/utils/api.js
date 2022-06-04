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
    console.log({ API_ERROR: e });
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
      id
      url(transformation: {document: {output: {format: webp}}, image: {resize: {fit: max, width: 1920, height: 1080}}})
      width
      height
      handle
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
    reviews {
      createdAt
      date
      id
      person {
        avatar {
          url(transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 64, width: 64}}})
        }
        name
      }
      rating
      helpful
      comment{
        html
      }
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

export const tags = async (slug = null) => {
  console.log(slug);
  const { tags } = await api(
    `query tags {
  tags(${slug ? `where: {slug: "${slug}"}` : ''}) {
    color
    id
    slug
    title
    photosessions ${slug ? '' : '(last: 6)'} {
      id
      author {
        id
        name
        picture {
          url(
            transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 100, width: 100}}}
          )
        }
        title
      }
      category {
        publishedAt
        slug
        title
      }
      date
      images {
        id
      }
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
      reviews {
        createdAt
        id
        person {
          avatar {
            url(transformation: {})
          }
          name
        }
        rating
        helpful
        comment {
          html
        }
      }
    }
  }
}
`,
  );
  return tags || [];
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
      url(
        transformation: {document: {output: {format: webp}}, image: {resize: {fit: crop, height: 1080, width: 1980}}}
      )
    }
    photosessions(orderBy: date_DESC) {
      author {
        name
        picture {
          url(
            transformation: {document: {output: {format: webp}}, image: {resize: {height: 64, width: 64}}}
          )
        }
      }
      coverImage {
        url(
          transformation: {document: {output: {format: webp}}, image: {resize: {fit: max, height: 358, width: 358}}}
        )
      }
      date
      excerpt
      images {
        id
      }
      slug
      tags {
        id
        slug
        title
      }
      category {
        slug
      }
      place {
        location
      }
      title
    }
    slug
    title
  }
}
`,
  );
  return category || [];
};

export async function lastPhotosessions(number = 6){
  const {photosessions} = await api(`
query lastPhotosessions {
  photosessions(first: ${number}, orderBy: date_DESC) {
    category {
      slug
    }
    author {
      name
      title
      picture {
        url(
          transformation: {document: {output: {format: webp}}, image: {resize: {height: 65, width: 65}}}
        )
      }
    }
    coverImage {
      url(
        transformation: {document: {output: {format: webp}}, image: {resize: {height: 364, width: 364}}}
      )
    }
    excerpt
    images {
      id
    }
    place {
      location
    }
    slug
    tags {
      slug
      title
    }
    date
    title
  }
}
  `);
  return photosessions || [];
}
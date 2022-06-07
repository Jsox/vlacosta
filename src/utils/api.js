import { GraphQLClient } from 'graphql-request';
import { fragments } from '../queryFragments';

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
    if (answer.errors) {
      answer.errors.forEach(e => {
        console.warning({ API_ERROR: e.message });
      });
      return;
    }
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
    ...CategoryParts
    photosessions(first: 5, orderBy: date_DESC) {
      ...PhotoSessionParts
      coverImage {
        url(
          transformation: {document: {output: {format: webp}}, image: {resize: {fit: max, height: 544, width: 544}}}
        )
      }
      category {
        ...CategoryParts
      }
      author {
        ...AuthorParts
      }
      persons {
        ...PersonParts
      }
      tags(first: 4) {
        ...TagParts
      }
      place {
        ...PlaceParts
      }
    }
  }
}
${fragments.CategoryParts}
${fragments.AuthorParts}
${fragments.TagParts}
${fragments.PhotoSessionParts}
${fragments.PersonParts}
${fragments.PlaceParts}
`,
  );
  return data.categories;
};

export const photosession = async (slug) => {
  const data = await api(
    `
{
  photosession(where: {slug: "${slug}"}) {
    ...PhotoSessionParts
    author {
      ...AuthorParts
    }
    category {
      ...CategoryParts
    }
    coverImage {
            url(
        transformation: {image: {resize: {height: 560, width: 1920, fit: crop}}, document: {output: {format: webp}}}
      )
    }
    tags {
      ...TagParts
    }
    place {
      ...PlaceParts
    }
    persons {
        ...PersonParts
    }
    reviews {
      ...ReviewParts
    }
  }
}
${fragments.CategoryParts}
${fragments.AuthorParts}
${fragments.TagParts}
${fragments.ReviewParts}
${fragments.PersonParts}
${fragments.PhotoSessionParts}
${fragments.PlaceParts}
`,
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
}
`,
  );
  return photosessions || [];
};
export const categoriesPaths = async () => {
  const { categories } = await api(
    `    {
  categories {
    slug
  }
    }
    `,
  );
  return categories || [];
};

export const tags = async (slug = null) => {
  console.log(slug);
  const { tags } = await api(
    `query tags {
  tags(${slug ? `where: {slug: "${slug}"}` : ''}) {
    ...TagParts
    photosessions ${slug ? '' : '(last: 6)'} {
      ...PhotoSessionParts
      category { 
        slug
      }
      author {
      ...AuthorParts
      }
      reviews {
        ...ReviewParts
      }
    }
  }
}
${fragments.AuthorParts}
${fragments.TagParts}
${fragments.PhotoSessionParts}
${fragments.ReviewParts}
`,
  );
  return tags || [];
};
export const category = async (slug) => {
  const { category } = await api(
    `
query category {
  category(where: {slug: "${slug}"}) {
    ...CategoryParts
    photosessions(orderBy: date_DESC) {
      ...PhotoSessionParts
      place{
        ...PlaceParts
      }
      category{
        slug
      }
      author{
        ...AuthorParts
      }
    }
  }
}
${fragments.CategoryParts}
${fragments.AuthorParts}
${fragments.PhotoSessionParts}
${fragments.PlaceParts}
`,
  );
  return category || [];
};

export async function lastPhotosessions(number = 6) {
  const { photosessions } = await api(`
query lastPhotosessions {
  photosessions(first: ${number}, orderBy: date_DESC) {
    category {
      ...CategoryParts
    }
    author {
...AuthorParts
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
${fragments.CategoryParts}
${fragments.AuthorParts}
`);
  return photosessions || [];
}

export const author = async (slug) => {
  const { author } = await api(
    `
query author {
  author(where: {slug: "${slug}"}) {
    ...AuthorParts
    picture {
        url(
          transformation: {document: {output: {format: webp}}, image: {resize: {height: 560, width: 1980}}}
        )
    }
    photosessions(orderBy: date_DESC) {
      ...PhotoSessionParts
      place{
        ...PlaceParts
      }
      category{
        slug
      }
      author{
        ...AuthorParts
      }
      tags {
        ...TagParts
      }
    }
  }
}
${fragments.AuthorParts}
${fragments.PhotoSessionParts}
${fragments.PlaceParts}
${fragments.TagParts}
`,
  );
  return author || [];
};

export async function authorsPaths() {
  const { authors } = await api(
    `
query authors {
  authors {
    slug
  }
}
`);
  return authors;
}
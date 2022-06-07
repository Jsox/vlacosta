export const fragments = {
  AuthorParts: `
fragment AuthorParts on Author {
  id
  name
  picture {
    url(
      transformation: {document: {output: {format: webp}}, image: {resize: {height: 65, width: 65}}}
    )
  }
  slug
  biography
  title
}`,
  CategoryParts: `fragment CategoryParts on Category {
  image {
    url(
      transformation: {document: {output: {format: webp}}, image: {resize: {fit: crop, height: 1080, width: 1980}}}
    )
  }
  description {
    html
    text
  }
  product {
    slug
    title
  }
  publishedAt
  slug
  title
}
  `,
  PhotoSessionParts: `
fragment PhotoSessionParts on Photosession {
  coverImage {
    url(
      transformation: {document: {output: {format: webp}}, image: {resize: {fit: max, height: 358, width: 358}}}
    )
  }
  date
  excerpt
  images {
    id
    handle
    width
    height
    url(transformation: {document: {output: {format: webp}}, image: {resize: {fit: max, width: 1920, height: 1080}}})
  }
  slug
  title
  content {
    html
    text
  }
}
  `,
  ReviewParts: `
      fragment ReviewParts on Review {
        createdAt
        id
        person {
          avatar {
            url(transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 64, width: 64}}})
          }
          name
        }
        rating
        helpful
        comment {
          html
        }
      }
  `,
  TagParts: `
fragment TagParts on Tag {
  id
  title
  slug
  description{
    html
    text
  }
  color
}
  `,
  PersonParts: `
  fragment PersonParts on Person{
    avatar {
      url(
        transformation: {document: {output: {format: webp}}, image: {resize: {fit: scale, height: 100, width: 100}}}
      )
    }
    name
  }
  `,
  PlaceParts: `
  fragment PlaceParts on Place{
      location
      map {
        latitude
        longitude
      }
  }
  `,
};
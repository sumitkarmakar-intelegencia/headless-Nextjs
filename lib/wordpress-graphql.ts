import { gql } from "graphql-request";
import { GraphQLClient } from "graphql-request";
import type {
    Post,
    Category,
    Tag,
    Page,
    Author,
    FeaturedMedia,
  } from "./wordpress.d";
// WordPress Config
const baseUrl = process.env.WORDPRESS_URL;
const graphqlEndpoint = `${baseUrl}/graphql`;

const client = new GraphQLClient(graphqlEndpoint, {
  headers: {
    "User-Agent": "Next.js WordPress Client",
  },
});

export async function getAllPostsGraphQL(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
  search?: string;
}): Promise<Post[]> {
  const query = gql`
    query GetAllPosts($author: String, $tag: String, $category: String, $search: String) {
      posts(where: { authorName: $author, tag: $tag, categoryName: $category, search: $search }) {
        nodes {
          id
          title
          content
          slug
          date
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  const variables = {
    author: filterParams?.author || null,
    tag: filterParams?.tag || null,
    category: filterParams?.category || null,
    search: filterParams?.search || null,
  };

  const response = await client.request(query, variables);
  return response.posts.nodes;
}

export async function getPostByIdGraphQL(id: number): Promise<Post> {
  const query = gql`
    query GetPostById($id: ID!) {
      post(id: $id, idType: DATABASE_ID) {
        id
        title
        content
        slug
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  `;

  const variables = { id };
  const response = await client.request(query, variables);
  return response.post;
}

export async function getPostBySlugGraphQL(slug: string): Promise<Post> {
  const query = gql`
    query GetPostBySlug($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        content
        slug
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  `;

  const variables = { slug };
  const response = await client.request(query, variables);
  return response.postBy;
}

export async function getAllCategoriesGraphQL(): Promise<Category[]> {
  const query = gql`
    query GetAllCategories {
      categories {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const response = await client.request(query);
  return response.categories.nodes;
}

export async function getCategoryByIdGraphQL(id: number): Promise<Category> {
  const query = gql`
    query GetCategoryById($id: ID!) {
      category(id: $id, idType: DATABASE_ID) {
        id
        name
        slug
      }
    }
  `;

  const variables = { id };
  const response = await client.request(query, variables);
  return response.category;
}

export async function getCategoryBySlugGraphQL(slug: string): Promise<Category> {
  const query = gql`
    query GetCategoryBySlug($slug: String!) {
      categoryBy(slug: $slug) {
        id
        name
        slug
      }
    }
  `;

  const variables = { slug };
  const response = await client.request(query, variables);
  return response.categoryBy;
}

export async function getPostsByCategoryGraphQL(categoryId: number): Promise<Post[]> {
  const query = gql`
    query GetPostsByCategory($categoryId: ID!) {
      posts(where: { categoryId: $categoryId }) {
        nodes {
          id
          title
          content
          slug
          date
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  const variables = { categoryId };
  const response = await client.request(query, variables);
  return response.posts.nodes;
}

export async function getPostsByTagGraphQL(tagId: number): Promise<Post[]> {
  const query = gql`
    query GetPostsByTag($tagId: ID!) {
      posts(where: { tagId: $tagId }) {
        nodes {
          id
          title
          content
          slug
          date
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  const variables = { tagId };
  const response = await client.request(query, variables);
  return response.posts.nodes;
}

export async function getTagsByPostGraphQL(postId: number): Promise<Tag[]> {
  const query = gql`
    query GetTagsByPost($postId: ID!) {
      post(id: $postId, idType: DATABASE_ID) {
        tags {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  `;

  const variables = { postId };
  const response = await client.request(query, variables);
  return response.post.tags.nodes;
}

export async function getAllTagsGraphQL(): Promise<Tag[]> {
  const query = gql`
    query GetAllTags {
      tags {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const response = await client.request(query);
  return response.tags.nodes;
}

export async function getTagByIdGraphQL(id: number): Promise<Tag> {
  const query = gql`
    query GetTagById($id: ID!) {
      tag(id: $id, idType: DATABASE_ID) {
        id
        name
        slug
      }
    }
  `;

  const variables = { id };
  const response = await client.request(query, variables);
  return response.tag;
}

export async function getTagBySlugGraphQL(slug: string): Promise<Tag> {
  const query = gql`
    query GetTagBySlug($slug: String!) {
      tagBy(slug: $slug) {
        id
        name
        slug
      }
    }
  `;

  const variables = { slug };
  const response = await client.request(query, variables);
  return response.tagBy;
}

export async function getAllPagesGraphQL(): Promise<Page[]> {
  const query = gql`
    query GetAllPages {
      pages {
        nodes {
          id
          title
          content
          slug
          date
        }
      }
    }
  `;

  const response = await client.request(query);
  return response.pages.nodes;
}

export async function getPageByIdGraphQL(id: number): Promise<Page> {
  const query = gql`
    query GetPageById($id: ID!) {
      page(id: $id, idType: DATABASE_ID) {
        id
        title
        content
        slug
        date
      }
    }
  `;

  const variables = { id };
  const response = await client.request(query, variables);
  return response.page;
}

export async function getPageBySlugGraphQL(slug: string): Promise<Page> {
  const query = gql`
    query GetPageBySlug($slug: String!) {
      pageBy(slug: $slug) {
        id
        title
        content
        slug
        date
      }
    }
  `;

  const variables = { slug };
  const response = await client.request(query, variables);
  return response.pageBy;
}

export async function getAllAuthorsGraphQL(): Promise<Author[]> {
  const query = gql`
    query GetAllAuthors {
      users {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const response = await client.request(query);
  return response.users.nodes;
}

export async function getAuthorByIdGraphQL(id: number): Promise<Author> {
  const query = gql`
    query GetAuthorById($id: ID!) {
      user(id: $id, idType: DATABASE_ID) {
        id
        name
        slug
      }
    }
  `;

  const variables = { id };
  const response = await client.request(query, variables);
  return response.user;
}

export async function getAuthorBySlugGraphQL(slug: string): Promise<Author> {
  const query = gql`
    query GetAuthorBySlug($slug: String!) {
      userBy(slug: $slug) {
        id
        name
        slug
      }
    }
  `;

  const variables = { slug };
  const response = await client.request(query, variables);
  return response.userBy;
}

export async function getPostsByAuthorGraphQL(authorId: number): Promise<Post[]> {
  const query = gql`
    query GetPostsByAuthor($authorId: ID!) {
      posts(where: { author: $authorId }) {
        nodes {
          id
          title
          content
          slug
          date
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  const variables = { authorId };
  const response = await client.request(query, variables);
  return response.posts.nodes;
}

export async function getPostsByAuthorSlugGraphQL(authorSlug: string): Promise<Post[]> {
  const author = await getAuthorBySlugGraphQL(authorSlug);
  return getPostsByAuthorGraphQL(author.id);
}

export async function getPostsByCategorySlugGraphQL(categorySlug: string): Promise<Post[]> {
  const category = await getCategoryBySlugGraphQL(categorySlug);
  return getPostsByCategoryGraphQL(category.id);
}

export async function getPostsByTagSlugGraphQL(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlugGraphQL(tagSlug);
  return getPostsByTagGraphQL(tag.id);
}

export async function getFeaturedMediaByIdGraphQL(id: number): Promise<FeaturedMedia> {
  const query = gql`
    query GetFeaturedMediaById($id: ID!) {
      mediaItem(id: $id, idType: DATABASE_ID) {
        id
        sourceUrl
        altText
      }
    }
  `;

  const variables = { id };
  const response = await client.request(query, variables);
  return response.mediaItem;
}

export async function searchCategoriesGraphQL(query: string): Promise<Category[]> {
  const gqlQuery = gql`
    query SearchCategories($query: String!) {
      categories(where: { search: $query }) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const variables = { query };
  const response = await client.request(gqlQuery, variables);
  return response.categories.nodes;
}

export async function searchTagsGraphQL(query: string): Promise<Tag[]> {
  const gqlQuery = gql`
    query SearchTags($query: String!) {
      tags(where: { search: $query }) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const variables = { query };
  const response = await client.request(gqlQuery, variables);
  return response.tags.nodes;
}

export async function searchAuthorsGraphQL(query: string): Promise<Author[]> {
  const gqlQuery = gql`
    query SearchAuthors($query: String!) {
      users(where: { search: $query }) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const variables = { query };
  const response = await client.request(gqlQuery, variables);
  return response.users.nodes;
}
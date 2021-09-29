import { gql } from 'graphql-request'

export const GET_VIDEOS = gql`
  query {
    videos {
      id
      title
      description
      url
      tags
      slug
      thumbnail {
        url
      }
    }
  }
`

export const GET_VIDEO = gql`
  query ($slug: String!) {
    video(where: { slug: $slug }) {
      id
      title
      description
      url
      tags
      slug
      thumbnail {
        url
      }
    }
  }
`
export const GET_ACCOUNT = gql`
  query ($id: ID!) {
    account(where: { id: $id }) {
      username
      avatar {
        url
      }
      seen {
        slug
      }
    }
  }
`

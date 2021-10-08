import { gql } from 'graphql-request'

const VideoFragment = gql`
  fragment VideoFragment on Video {
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
`
export const GET_VIDEOS = gql`
  query {
    videos {
      ...VideoFragment
    }
  }
  ${VideoFragment}
`

export const GET_VIDEO = gql`
  query ($slug: String!) {
    video(where: { slug: $slug }) {
      ...VideoFragment
    }
  }
  ${VideoFragment}
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

export const GET_USER_NOT_WATCHED = gql`
  query ($array: [String!]) {
    videos(first: 6, where: { slug_not_in: $array }) {
      ...VideoFragment
    }
  }
  ${VideoFragment}
`

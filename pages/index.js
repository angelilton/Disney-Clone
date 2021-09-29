import { useEffect } from 'react'

import { GraphQLClient } from 'graphql-request'
import Img from 'next/image'

import { GET_VIDEOS } from '/graphql/query'
import Section from '/components/Section'
import { GET_ACCOUNT } from '../graphql/query'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'

const userId = 'cktri9s8g3tbz0c033ewsqt0r'

export const getStaticProps = async () => {
  const url =
    'https://api-eu-central-1.graphcms.com/v2/cktrg8evd2dwk01xm73l3ee63/master'
  const graphQLClient = new GraphQLClient(url)

  const { videos } = await graphQLClient.request(GET_VIDEOS)

  const { account } = await graphQLClient.request(GET_ACCOUNT, { id: userId })

  return {
    props: {
      videos,
      account
    }
  }
}

export default function Home({ videos, account }) {
  const filterCategory = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre))
  }

  return (
    <>
      <section>
        <Navbar account={account} />
        <Cover videos={videos} />
      </section>
      <section className="video-feed">
        <Section genre="Disney" videos={filterCategory(videos, 'Disney')} />
        <Section genre="Marvel" videos={filterCategory(videos, 'Marvel')} />
        <Section genre="Família" videos={filterCategory(videos, 'Família')} />
        <Section genre="Comédia" videos={filterCategory(videos, 'Comédia')} />
        <Section genre="Aventura" videos={filterCategory(videos, 'Aventura')} />
        <Section genre="Ação" videos={filterCategory(videos, 'Ação')} />
      </section>
    </>
  )
}

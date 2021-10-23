import { GraphQLClient } from 'graphql-request'
import { GET_VIDEOS, GET_ACCOUNT, GET_BANNER } from '../graphql/query'

import Section from '/components/Section'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const userId = 'cktri9s8g3tbz0c033ewsqt0r'

export const getStaticProps = async () => {
  const url =
    'https://api-eu-central-1.graphcms.com/v2/cktrg8evd2dwk01xm73l3ee63/master'
  const graphQLClient = new GraphQLClient(url)

  const { videos } = await graphQLClient.request(GET_VIDEOS)
  const { banners } = await graphQLClient.request(GET_BANNER)
  const { account } = await graphQLClient.request(GET_ACCOUNT, { id: userId })

  return {
    props: {
      revalidate: 60,
      banners,
      videos,
      account
    }
  }
}

export default function Home({ videos, account, banners }) {
  const filterCategory = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre))
  }

  return (
    <>
      <section>
        <Navbar account={account} />
        <Banner banners={banners} />
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

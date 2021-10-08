import { GraphQLClient } from 'graphql-request'
import Img from 'next/image'
import {
  GET_ACCOUNT,
  GET_VIDEO,
  GET_USER_NOT_WATCHED
} from '../../graphql/query'
import Section from '/components/Section'

const userId = 'cktri9s8g3tbz0c033ewsqt0r'

export const getServerSideProps = async (ctx) => {
  const url =
    'https://api-eu-central-1.graphcms.com/v2/cktrg8evd2dwk01xm73l3ee63/master'
  const graphQLClient = new GraphQLClient(url)

  const slug = ctx.query.slug
  const variables = { slug }

  const { video } = await graphQLClient.request(GET_VIDEO, variables)

  const {
    account: { seen }
  } = await graphQLClient.request(GET_ACCOUNT, { id: userId })

  const userSlug = seen.map(({ slug }) => slug)

  const { videos } = await graphQLClient.request(GET_USER_NOT_WATCHED, {
    array: userSlug
  })

  return {
    props: {
      video,
      videos
    }
  }
}

export default function Index({ video, videos }) {
  return (
    <section className="film-page">
      <iframe
        id="ytVideo"
        type="text/html"
        width="100%"
        height="700"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allowFullScreen
      />

      <section className="film-info">
        <header>
          <h2>{video.title}</h2>
          <span>{video.tags.join(', ')}</span>
        </header>

        <article className="film-description">
          <Img
            width={250}
            height={150}
            src={video.thumbnail.url}
            alt={`cover of ${video.title}`}
          />
          <p>{video.description}</p>
        </article>
      </section>
      <section>
        <Section genre="talvez você goste" videos={videos} />
      </section>
    </section>
  )
}

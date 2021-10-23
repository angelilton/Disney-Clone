import Link from 'next/link'
import Card from '/components/Card'

import * as S from './styles'

const index = ({ genre, videos }) => (
  <section>
    <S.Title>{genre}</S.Title>
    <S.Card>
      {videos.map(({ id, slug, thumbnail }) => (
        <a key={id} href={`/filme/${slug}`}>
          <Card thumbnail={thumbnail} />
        </a>
      ))}
    </S.Card>
  </section>
)

export default index

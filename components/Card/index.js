import Img from 'next/image'

import * as S from './styles'

const Card = ({ thumbnail }) => (
  <S.Card>
    <Img width={250} height={150} src={thumbnail.url} alt={thumbnail.title} />
  </S.Card>
)

export default Card

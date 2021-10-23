import Img from 'next/image'
import Slider from '../Slider'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'

const settings = {
  arrows: true,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ],
  nextArrow: (
    <div>
      <ArrowRight size={23} aria-label="next" />
    </div>
  ),
  prevArrow: (
    <div>
      <ArrowLeft size={23} aria-label="previous" />
    </div>
  )
}

const Banner = ({ banners }) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {banners.map(({ id, cover, title }) => (
        <S.Img key={id} src={cover.url} alt={title} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default Banner

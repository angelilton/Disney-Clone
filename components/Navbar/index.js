import Img from 'next/image'
import Link from 'next/link'
import disney_logo from '/public/disney_logo.png'

import * as S from './styles'

const Navbar = ({ account }) => {
  const { username, avatar } = account

  return (
    <S.Navbar>
      <S.Logo>
        <Link href="/" passHref>
          <Img width={100} height={58} src={disney_logo} alt="Disney logo" />
        </Link>
      </S.Logo>

      <S.AccountInfo>
        <S.Title>Welcome, {username}</S.Title>
        <Img src={avatar.url} layout="fixed" width={50} height={47} />
      </S.AccountInfo>
    </S.Navbar>
  )
}

export default Navbar

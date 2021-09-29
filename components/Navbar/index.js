import Img from 'next/image'
import Link from 'next/link'
import disney_logo from '/public/disney_logo.png'

const Navbar = ({ account }) => {
  const { username, avatar } = account

  return (
    <div className="navbar">
      <div>
        <Link href="/" passHref>
          <Img
            className="disneyLogo"
            width={100}
            height={62}
            src={disney_logo}
            alt="Disney logo"
          />
        </Link>
      </div>

      <div className="account-info">
        <p>Welcome, {username}</p>
        <img className="avatar" src={avatar.url} />
      </div>
    </div>
  )
}

export default Navbar

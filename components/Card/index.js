import Img from 'next/image'

const Card = ({ thumbnail }) => (
  <div className="card">
    <Img width={250} height={150} src={thumbnail.url} alt={thumbnail.title} />
  </div>
)

export default Card

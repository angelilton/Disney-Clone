import Link from 'next/link'
import Card from '/components/Card'

const index = ({ genre, videos }) => (
  <section>
    <h3>{genre}</h3>
    <div className="cards">
      {videos.map((video) => (
        <a key={video.id} href={`/filme/${video.slug}`}>
          <Card thumbnail={video.thumbnail} />
        </a>
      ))}
    </div>
  </section>
)

export default index

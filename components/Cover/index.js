import Img from 'next/image'

const Cover = ({ videos }) => {
   const randomVideo = (videos) => {
    const { title, slug, thumbnail } =
      videos[Math.floor(Math.random() * videos.length)]
    return [{ title, thumbnail, slug }]
  }

return (
  <div className="cover">
    {randomVideo(videos).map(({ title, thumbnail, slug }) => (
      <Img key={slug} layout="fill" src={thumbnail.url} alt={title} />
    ))}
  </div>
)
}

export default Cover

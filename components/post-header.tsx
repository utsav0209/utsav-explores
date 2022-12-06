import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="max-w-4xl mx-auto mb-6">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-4xl mx-auto flex justify-start">
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="max-w-4xl mx-auto mb-12">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="hidden md:block md:mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg italic">
          <DateFormatter dateString={date} />
        </div>
        <hr />
      </div>
    </>
  )
}

export default PostHeader

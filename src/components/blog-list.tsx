import { Meta } from '../../types';
import BlogCard from './blog-card';
import { Separator } from './ui/separator';

export default async function BlogList({
  posts,
}: {
  posts: Meta[] | undefined;
}) {
  if (!posts) {
    return (
      <div className='grid grid-cols-1'>
        <p>SOrry no post available at the moment..</p>
      </div>
    );
  }
  return (
    <div className='w-full my-8'>
      <h2 className='text-xl font-bold mb-4 ml-4'>Latest Post ✨</h2>
      <Separator />
      <ul className='blogs-ul'>
        {posts.map((post, index) => (
          <BlogCard
            post={post}
            key={post.id}
            isFirst={index === 0}
            readingTime={post.readingTime}
          />
        ))}
      </ul>
    </div>
  );
}

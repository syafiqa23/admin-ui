import PostCard from './PostCard';
import { posts } from './postsData';

export default function UserPost() {
  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-700">Post Cards</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-8xl mx-auto">
        {posts.map((p) => (
          <PostCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

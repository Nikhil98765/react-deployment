import { useLoaderData } from 'react-router-dom';

import PostItem from '../components/PostItem';

function PostPage() {
  const post = useLoaderData();
  console.log("🚀 ~ PostPage ~ post:", post)

  return <PostItem post={post} />;
}

export default PostPage;

export function loader({ params }) {
  console.log("🚀 ~ loader ~ params:", params)
  const postId = params.id;
  return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}

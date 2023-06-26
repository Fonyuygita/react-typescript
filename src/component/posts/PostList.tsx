import React from 'react'
import styles from "./post.module.css"
import PostCard from './PostCard'
import { PostProps } from '@/types'

const fetchPost=async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if(!res.ok){
    throw new Error("Failed to fetch data")
  }

return res.json();
}






const PostList = async() => {



    const data:PostProps[] = await fetchPost();
    console.log(data);
console.log(data[2].title);

  return (
    <div className='postList'>
<h1>WELCOME TO THE FULL POSTS PAGE</h1>


{data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

    </div>
  )
}

export default PostList
import React from 'react'
import styles from "./post.module.css"
import { PostProps } from '@/types'

const PostCard = ({title,body}: PostProps) => {

  console.log(title);
  return (
    <div className="postCard">
      <h1>{title}</h1>
      <p>{body}</p>

      
    </div>
  );
};


export default PostCard
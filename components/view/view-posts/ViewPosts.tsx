import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const ViewPosts = () => {
    const posts = useSelector((state: RootState) => state.posts);
    console.log("Posts", posts)
    return (
        <>
        {posts.length === 0 ?
         <p>No Current Posts In System</p>
         :
         posts.map((post) => (
            <li key={post.author}>
                {post.author}
                {post.creationDate}
                {post.post}
            </li>
         ))
        }
        </>
    )
}

export default ViewPosts;
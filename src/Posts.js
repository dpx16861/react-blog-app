import React from 'react';

import Post from './Post';

const Posts = (props) =>
    <div className="posts">
        <div className="container">
            {
                props.posts.map((post, index) =>
                    <Post
                        key={index}
                        id={post.id}
                        timestamp={post.timestamp}
                        title={post.title}
                        content={post.content}
                        onPostDelete={props.onPostDelete}
                    />
                )
            }
        </div>
    </div>;

export default Posts;

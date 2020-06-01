import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import '../App.css'

const Posts = () => {
    const [my_posts, setMyPosts] = useState([]);

    const getPosts = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => {
                setMyPosts(resp.data);
            });
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {my_posts &&
                my_posts.map((post) => {
                    return (
                        <Fragment key={post.id}>
                            <Link style={{ textDecoration: "none" }} to={"/posts/" + post.id} >
                                <div
                                    className="post"
                                >
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            </Link>
                        </Fragment>
                    );
                })}
        </div >
    );
};

export default Posts;

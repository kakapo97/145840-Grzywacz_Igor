import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = props => {
    const post_info = props.match.params.id;

    const [my_post, setMyPost] = useState(null);
    const [comments, setComments] = useState([])

    const getPosts = async () => {
        let array = [];
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${post_info}`)
            .then((resp) => {
                setMyPost(resp.data)
            });

        axios
            .get(`https://jsonplaceholder.typicode.com/comments`)
            .then(async (resp) => {
                await resp.data.map(com => {
                    if (com.postId == post_info)
                        array.push(com)
                })
                setComments(array)
            });
    };


    useEffect(() => {
        getPosts();
    }, [])
    return (
        <Fragment>
            <Link style={{ textDecoration: "none", color: "black" }} to={"user/" + post_info}>
                <div style={{ border: '2px solid black', margin: "30px 0" }}>
                    <h3>{my_post && my_post.title}</h3>
                    <p>{my_post && my_post.body}</p>
                </div>
            </Link>
            <div>
                {comments && comments.map(com => {
                    return (
                        <div style={{ border: '1px solid black', margin: "5px 0" }}>
                            <h5>{com.name} ({com.email})</h5>
                            <p>{com.body}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Post;
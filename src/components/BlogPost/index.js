import React,{useState,useEffect} from 'react';
import './style.css';
import Cards from '../UI/Cards';
import blogPost from '../../data/blog.json';


const BlogPost = (props) =>{

const[post, setPost] = useState({
    id: "",
blogCategory: "",
blogTitle : "",
slug: "",
postedOn: "",
author: "",
blogImage: "",
blogText:""
});
const[postId, setPostId] = useState('');    

useEffect(() =>{
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    setPost(post);
    setPostId(postId)
},[post,props.match.params.postId]);

if(post.blogImage == "") return null;
    return(
        <div className="blogPostContainer">
            <Cards>
                <div className="blogHeader">
    <div className="blogCategory">{post.blogCategory}</div>
    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} By {post.author} </span> 
                </div>
            </Cards>
            <div className="postImageContainer">
            <img alt="postimage" src={require(`../../images/${post.blogImage}`)} />
            </div>
            <div className="postContent">
    <h3>{post.blogTitle}</h3>
    <p>{post.blogText}</p>
            </div>
        </div>
    )
}
export default BlogPost;
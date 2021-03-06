import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/sidebar';


const Post = (props) =>{
    console.log(props);
    return(
        <section className="container">
            <BlogPost {...props}/>
            <SideBar />
        </section>
    )
}
export default Post;
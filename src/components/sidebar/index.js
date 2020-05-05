import React,{useState,useEffect} from 'react';
import './style.css';
import Cards from '../UI/Cards';
import blogPost from './../../data/blog.json';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = (props) =>{

        const [posts,setPosts]  = useState([]);
    
         useEffect(() =>{
           const posts = blogPost.data;
           setPosts(posts);
        },posts);

    return(
        <div className="sidebarContainer">
         <Cards style={{marginBottom:'20px'}}>
             <div className="classHeader">
                 <span>about us</span>
                 <div className="profileImageContainer">
                 <img alt="postimage" src={require('../../images/j1.jpg')} />
                 </div>
                 <div className="cardBody">
                    <p className="personalBio" >my name is ajit kuamr gupta <br></br> i am a  web devloper</p>
                 </div>
             </div>
        </Cards>
        <Cards style={{marginBottom:'10px',paddingLeft:'20px',boxSizing:'border-box'}}>
        <h3 className="text-danger">Follow Me@:</h3>
             <div class="my-icons">
                 
            <span><FontAwesomeIcon icon="facebook" /></span>
            <span><FontAwesomeIcon icon={['fab', 'google']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'facebook']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'instagram']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'linkedin']} /></span>
            <span><FontAwesomeIcon icon={['fab', 'github']} /></span>
            </div>
             
        </Cards>
        <Cards style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
             <div className="cardHeader">
                 <span>Recent Post</span>
             </div>
             <div className="recentPosts">
               {
                   posts.map(post=>{
                       return(
                           <NavLink to={`/post/${post.id}`}>
                           <div className="recentPost">
                               <h3>{post.blogTitle}</h3>
                               <span>{post.postedOn}</span>
                               </div>
                               </NavLink>
                       );
                   })
               }
             </div>
        </Cards>
        </div>
        )
}
export default SideBar;
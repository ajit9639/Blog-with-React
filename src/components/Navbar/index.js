import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Navbar = (props) =>{

   {/*
    const[search,setSearch] = useState(false);

    const submitSearch = (e)=>{
        e.preventDefault();
        alert("its working");
    }
    const openSearch = ()=>{
        setSearch(true);
    }

    const searchClass = search ? "searchInput active" : "searchInput" ;
*/}

    return(
        <div className="navbar">
            <ul className="navbarmenu">
                <li><NavLink to="/post/1">Post-1</NavLink></li>
                <li><NavLink to="/Post/2">2</NavLink></li>
                <li><NavLink to="/post/3">3</NavLink></li>
                <li><NavLink to="/post/4">4</NavLink></li>
                <li><NavLink to="/post/5">5</NavLink></li>
            </ul>
      {/*
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search.."/>
                <img className="searchIcon" onClick={openSearch} alt="search" src={require("../Logo/lo.png")} />
                </form>
            </div>
            */}
            </div>
      
    )
}
export default Navbar; 
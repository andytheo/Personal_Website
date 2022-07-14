import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../home/Nav';
import BlogList from '../home/BlogList';
import Icons from '../home/Icons';


function Blog() {
  return(
    <div>
    <Nav />
    <div className="blog">
    <h1 className="section-header">Blog</h1>
    <div className="container">
    <div className="card-deck">
    <BlogList
    img="../../../images/learn.jpg"
    title="Learning to Code"
    text= "Coding is an amazing skill. Get to know if it's right for you."
    link="/blog-learn"
    />
    <BlogList
    img="../../../images/switch.jpg"
    title="Switching careers"
    text="Thinking about a career switch? Here's something you should know."
    link="/blog-switching-career"
    />
    </div>
    </div>
    </div>
    <Icons />
    </div>
  )
}

export default Blog;

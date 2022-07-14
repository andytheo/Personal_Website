import React from 'react';
import ReactDOM from 'react-dom';
import BlogList from './BlogList';
import { NavLink } from 'react-router-dom';

function Blog() {
  return (
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
    <NavLink to="/blog"><button className="btn btn-outline-dark centered-btn" type="button">See more blogposts</button></NavLink>
</div>
  )
}

export default Blog;

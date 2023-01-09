import React from 'react';
import ReactDOM from 'react-dom';

function BlogTemplate(props) {
  return(
    <div>
    <div className={props.imageClass}>
    <h1 className="blogpost-title">{props.blogTitle}</h1>
    </div>

    <div className="author">
    <div className="container">
    <div className="row">
    <div>
    <img className="author-image" src={props.authorimage} />
    </div>
    <div className="blog-read">
    <p className="author-name">{props.authorname}</p>
    <p className="read-time">{props.readtime}</p>
    </div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default BlogTemplate;

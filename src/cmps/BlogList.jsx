import PropTypes from 'prop-types';
import {Fragment} from 'react';
import BlogPreview from './BlogPreview';

export default function BlogList({blogs, title, handleDelete}) {
  BlogList.propTypes = {
    blogs: PropTypes.array.isRequired,
    handleDelete: PropTypes.func,
  };
  
 
  console.log (blogs);
  return (
    <Fragment>
      <h2 className="title"><i className="far fa-comment-alt" /> {title}</h2>
      <div className="blog-list">
        {blogs.map (blog => (
          <BlogPreview blog={blog} key={blog.id} handleDelete={handleDelete} />
        ))}
      </div>
    </Fragment>
  );
}

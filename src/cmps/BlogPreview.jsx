import PropTypes from 'prop-types';

export default function BlogPreview({blog, handleDelete}) {
  BlogPreview.propTypes = {
    blog: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
  };

  function truncate(string,n) {
      return string.length > n ? string.substring(0, n - 1) + '...' : string
  }
  return (
    <section className="blog-preview flex column">
      <section className="blog-header flex space-between align-center">
        <section className="terminal-dots flex">
          <div className="console-dot red" />
          <div className="console-dot yellow" />
          <div className="console-dot green" />
        </section>
        <span>{blog.title}</span>
      </section>
      <section className="blog-content flex column align-center">
        <span className="blog-txt">{truncate(blog.body,70)}</span>
        <section className="blog-mask flex column align-center justify-center">
          <span><i className="fas fa-eye" /> Preview</span>
          <span className="btn-delete" onClick={() => handleDelete(blog.id)}>
            <i className="fas fa-trash" /> Delete
          </span>
        </section>
      </section>
    </section>
  );
}

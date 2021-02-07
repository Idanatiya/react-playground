import {useState, useEffect} from 'react';
import BlogList from './../cmps/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState ([]);

  const[name, setName] =useState('mario')

  //Runs only in the first render of the component cuz of []
  useEffect (() => {
      async function fetchData() {
          const res = await fetch('http://localhost:8000/blogs')
          const blogs = await res.json();
          setBlogs(blogs);
      }
      fetchData();
    console.log ('use effect ran!');
  },[name]);

  const onHandleDelete = blogId => {
    const newBlogs = blogs.filter (blog => blog.id !== blogId);
    setBlogs (newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={onHandleDelete} />
    </div>
  );
};

export default Home;

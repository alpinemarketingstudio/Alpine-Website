import React from "react";
import "../styles/Blog.css";
import blogData from "../data/Blog.js";

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <p>Learn new technology</p>
      <h2>Read our blog</h2>

      <div className="blog-cards">
        {blogData.map((item, index) => (
          <div key={index} className="blog-card">
            <div className="blog-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{item.title}</h3>
              <p className="blog-category">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import Blog from "./blog";

const BlogList = (props) => {
    const blogs = props.list.map((blog) =>
        (<Blog blog={blog} key={blog.id} />))
    return (
        <div className="container">
            <div className="row">
                {blogs}
            </div>
        </div>
  
    )
  }

  export default BlogList;
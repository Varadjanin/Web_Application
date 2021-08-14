const Header = (props) => {
  const { title } = props;
  return (
      <nav>
          <div className="nav-wrapper">
              <a href="#" className="brand-logo center">{title}</a>
          </div>
      </nav>
  )
}


const Blog = props => {
  const { title, body } = props.blog;
  return (

      <div className="col12">
          <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <p className="card-content white-text">{body}</p>
              </div>
          </div>
      </div>
  );
}



const BlogList = (props) => {
  const Blogs = props.list.map((blog) =>
      (<Blog blog={blog} key={blog.id} />))
  return (
      <div className="container">
          <div className="row">
              {Blogs}
          </div>
      </div>

  )
}

const Footer = (props) => {
  return (
     
      <div className="page-footer footer-copyright">
          <div className="container">
              © {new Date().getFullYear()} BIT React Posts
           </div>
      </div>
  )
}

const App = () => {
  return (
      <React.Fragment>
          <Header title="My React Blog" />
          <BlogList list={data} />
          <Footer />
      </React.Fragment>
  )
}



const root = document.querySelector(".root");
ReactDOM.render(<App />, root);

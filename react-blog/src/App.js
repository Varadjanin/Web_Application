import React from "react";

import Header from "./components/header";
import BlogList from "./components/blogList";
import Footer from "./components/footer";
import {data} from "./data";
import SwitchButton from "./components/switch";


const App = () => {
  return (
      <React.Fragment>
          <Header title="My React Blog" />
          <SwitchButton />
          <BlogList list={data} />
          <Footer />
      </React.Fragment>
  )
}



export default App;

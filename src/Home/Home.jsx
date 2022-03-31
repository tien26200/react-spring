import React, { Component } from "react";
import Header from "./Header";
import ListProduct from "./ListProduct";
import Footer from "./Footer";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <ListProduct />
        <Footer />
       
      </>
    );
  }
}

export default Home;

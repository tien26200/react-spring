import React, { Component } from "react";
import EmployeeService from "../Service/EmployeeService";

export default class UpdateProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      cost_product: "",
      image: "",
    };
    this.changeBrandNameHandler = this.changeBrandNameHandler.bind(this);
    this.changeTypeNameHandler = this.changeTypeNameHandler.bind(this);
    this.changeNameProductHandler = this.changeNameProductHandler.bind(this);
    this.changeCostProductHandler = this.changeCostProductHandler(this);
    this.changeImageProductHandler = this.changeImageProductHandler(this);
    this.updateProduct = this.updateProduct.bind(this);
  }
  componentDidMount() {
    EmployeeService.getProductsById(this.state.id).then((res) => {
      let products = res.data;
      this.setState({
        firstName: products.firstName,
        lastName: products.lastName,
        emailId: products.emailId,
        cost_product: products.cost_product,
        image: products.image,
      });
    });
  }

  updateProduct = (e) => {
    e.preventDefault();
    let products = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      cost_product: this.state.cost_product,
      image: this.state.image,
    };
    console.log("products =>" + JSON.stringify(products));
    EmployeeService.updateProduct(products, this.state.id).then((res) => {
      this.props.history.push("/products");
    });
  };
  //Phan xu ly them ten thuong hieu
  changeBrandNameHandler = (event) => {
    this.setState({ firstName: event.target.value }); // update state
  };
  //Phan xu lý them loai san pham
  changeTypeNameHandler = (event) => {
    this.setState({ lastName: event.target.value }); // update state
  };
  changeCostProductHandler = (event) => {
    this.setState({ cost_product: event.target.value }); // update state
    
  };
  changeImageProductHandler = (event) => {
    this.setState({ image: event.target.value }); // update state
  };
  //Phan xu ly them ten san pham
  changeNameProductHandler = (event) => {
    this.setState({
      emailId: event.target.value,
    }); // update state
  };
  //Nut Huy
  cancel() {
    this.props.history.push("/products");
  }
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center"> UpdateProducts</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Brand Name</label>
                    <input
                      placeholder="Brand Name"
                      name="firtsName"
                      className="form-control
                                        "
                      value={this.state.firstName}
                      onChange={this.changeBrandNameHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label> Type Name</label>
                    <input
                      placeholder="Type Name"
                      name="lastName"
                      className="form-control
                                        "
                      value={this.state.lastName}
                      onChange={this.changeTypeNameHandler}
                    ></input>
                  </div>

                  <label> Name Product</label>
                  <div className="form-group">
                    <input
                      placeholder="Name Product"
                      name="emailId"
                      className="form-control
                                        "
                      value={this.state.emailId}
                      onChange={this.changeNameProductHandler}
                    ></input>
                  </div>
                  <label> Cost Of Product</label>
                  <div className="form-group">
                    <input
                      placeholder="cost_product"
                      name="cost_product"
                      className="form-control
                                        "
                      value={this.state.cost_product}
                      onChange={this.changeCostProductHandler}
                    ></input>
                  </div>
                  <label> Image of Product</label>
                  <div className="form-group">
                    <input
                      placeholder="image"
                      name="image"
                      className="form-control
                                        "
                      value={this.state.image}
                      onChange={this.changeImageProductHandler}
                    ></input>
                  </div>
                  <button
                    className="btn- btn-success"
                    onClick={this.updateProduct}
                  >
                    {" "}
                    Save{" "}
                  </button>
                  <button
                    className="btn- btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "2px" }}
                  >
                    {" "}
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

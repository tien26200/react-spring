import React, { Component } from "react";
import EmployeeService from "../Service/EmployeeService";
import { Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";
import { Button, Card } from "react-bootstrap";



const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  flex: 1;
  padding-bottom: 20px;
`;

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[],
    };
    this.viewDetail = this.viewDetail.bind(this);
  }
  
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ products: res.data });
    });
  }
  viewDetail(id){
    
        this.props.history.push(`/viewDetail/${id}`);
  }
  render() {
    return (
      <div className="container-product">
        <h2 className="text-center"> Home Page</h2>
        <div className="contain">
          <div className="side-bar">
            <hr />
            <Nav vertical>
              <p>Danh Mục Sản Phẩm</p>
              <NavItem>
                <NavLink href="#">Orient</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Hubblot</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Rolex</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Patek Phillipies</NavLink>
              </NavItem>
            </Nav>
            <hr />
          </div>

          <div className="Product">
            <Products>
            {this.state.products.map((products) => (
              <CardContainer key ={products.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="data:image/jpeg;base64,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"
                  />
                  <Card.Body>
                    <Card.Title>
                       {products.firstName}
                    </Card.Title>
                    <Card.Text>
                      {products.lastName} <br/> Type is: {products.emailId}
                    </Card.Text>
                    <Button type="button" className="btn btn-outline-primary">Cost: {products.cost_product}</Button>
                    <Button variant="btn btn-success">Add To Card</Button>
                    <Button
                      className="btn btn-info"
                      onClick={() => this.viewDetail(products.id)}
                      style={{ marginLeft: "8px" }}
                    >
                      
                      Detail
                    </Button>       
                  </Card.Body>
                </Card>
              </CardContainer>
            ))}
            </Products>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProduct;

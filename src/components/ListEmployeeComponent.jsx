import React, { Component } from "react";
import EmployeeService from "../Service/EmployeeService";
import HeaderComponent from "./HeaderComponent";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editProducts = this.editProducts.bind(this);
    this.deleteProducts = this.deleteProducts.bind(this);
    this.viewProducts = this.viewProducts.bind(this); // biding this.addEmloyee
  }
  deleteProducts(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }
  editProducts(id) {
    this.props.history.push(`/update-products/${id}`);
  }
  viewProducts(id) {
    this.props.history.push(`/deatail-products/${id}`);
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  addEmployee() {
    this.props.history.push("/add-products"); // ADD PRODUCTS
  }

  render() {
    return (
      <div>
          <HeaderComponent/>
        <h2 className="text-center" style={{color:"black"}}>Product Management Page</h2>
        <div className="row"></div>
        <div className="row">
          <table className="table table-striped  table-light">
            <thead>
              <tr>
                <th className="th_Table"> Watch brand name</th>
                <th className="th_Table"> Type of watch</th>
                <th className="th_Table"> Watch name</th>
                <th className="th_Table"> Image</th>
                <th className="th_Table"> Cost</th>
                <th className="th_Table"> Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td></td>
                  <td>{employee.cost_product}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.editProducts(employee.id)}
                    >
                      {" "}
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteProducts(employee.id)}
                      style={{ marginLeft: "8px" }}
                    >
                      {" "}
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => this.viewProducts(employee.id)}
                      style={{ marginLeft: "8px" }}
                    >
                      {" "}
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;

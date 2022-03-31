import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

class DetailProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            products: {}
        }
    }

    componentDidMount(){
        EmployeeService.getProductsById(this.state.id).then( res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View products Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> products First Name: </label>
                            <div> { this.state.products.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> products Last Name: </label>
                            <div> { this.state.products.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> products Email ID: </label>
                            <div> { this.state.products.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default DetailProduct

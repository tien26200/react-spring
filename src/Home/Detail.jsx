import React, {Component} from "react";
import EmployeeService from '../Service/EmployeeService';

class Detail extends Component{


    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            product: {}
        }
    }

    componentDidMount(){
        EmployeeService.getProductsById(this.state.id).then( res => {
            this.setState({product: res.data});
        })
    }
    render(){

        return (

            <>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View products Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> products First Name: </label>
                            <div> { this.state.product.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> products Last Name: </label>
                            <div> { this.state.product.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> products Email ID: </label>
                            <div> { this.state.product.emailId }</div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default Detail
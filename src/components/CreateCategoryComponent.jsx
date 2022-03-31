import React, { Component } from 'react';
import EmployeeService from '../Service/EmployeeService';
import HeaderComponent from'./HeaderComponent';

class Createcategorycomponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {                   
            Array:'',
        };
        this.changeNameHandler = this.changeNameHandler.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
    }
    
    componentDidMount(){  
        
        EmployeeService.getCategorysById(this.state.id).then((res) =>{
            let categories = res.data;
            this.setState({
                name: categories.Array,         
            });
        
        });}

    changeNameHandler = (event) =>{
        this.setState({Array:event.target.value})
    }

    saveProduct = (e) =>{

            e.preventDefault();
            let categories = {name: this.state.Array};
            console.log('categories =>' + JSON.stringify(categories));
     
            EmployeeService.createCategory(categories).then(res =>{
             this.props.history.push('/products');
            });
    }

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container" style = {{marginTop: "5%"}}>
                    <div className="row">
                        <div className ="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Category</h3>
                            <div className="card-body">
                                 <form >
                                    
                                     <div className="form-group">
                                        <label> Name Of Category:</label>
                                        <input placeholder="Orient" name="name" className="form-control
                                        " value={this.state.name} onChange={this.changeNameHandler}></input> 
                                     </div>

                                        
                                     <button className="btn- btn-success" onClick={this.saveProduct}> Save </button>
                                     <button className="btn- btn-danger" onClick ={this.cancel.bind(this)} style={{marginLeft: "2px"}}> Cancel</button>
                                 </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Createcategorycomponent;

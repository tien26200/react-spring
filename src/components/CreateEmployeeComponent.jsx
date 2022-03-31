import React, {Component} from "react";
import EmployeeService from '../Service/EmployeeService';
import HeaderComponent from'./HeaderComponent';



class CreateEmployeeComponent extends Component{


    constructor(props) {
        super(props)
        this.state = {
            
            firstName :'',
            lastName: '',
            emailId:'',
            cost_product:'',
            image:'',
            category:[]


        }
        this.changeBrandNameHandler = this.changeBrandNameHandler.bind(this)
        this.changeTypeNameHandler = this.changeTypeNameHandler.bind(this)
        this.changeNameProductHandler = this.changeNameProductHandler.bind(this)
        this.changeCostProductHandler  = this.changeCostProductHandler.bind(this)
        this.changeImageProductHandler = this.changeImageProductHandler.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
    }

     componentDidMount(){  
        
        EmployeeService.getProductsById(this.state.id).then((res) =>{
            let products = res.data;
            this.setState({
                firstName: products.firstName, 
                 lastName: products.lastName,
                emailId: products.emailId,
                cost_product: products.cost_product,
                image: products.image,
            
            });
        
        });

        EmployeeService.getCategory()
        .then((res)=>{
            let category = res.data;
            this.setState({
                category: category
            })
        })
        
    }
   
   

    saveProduct = (e) =>{
        //Dặt tên biến ko rõ nên H ko biết cái nào là category của cái product
        e.preventDefault();
        let products = {firstName: this.state.firstName, lastName: this.state.lastName, image: this.state.image,
         emailId: this.state.emailId, cost_product: this.state.cost_product};
        console.log('products =>' + JSON.stringify(products));
 
        EmployeeService.createProducts(products).then(res =>{
         this.props.history.push('/products');
        });
     }
    //Phan xu ly them ten thuong hieu
    changeBrandNameHandler = (event) =>{

        this.setState({firstName: event.target.value}); // update state
        console.log(this.state.firstName);
    }
    //Phan xu lý them loai san pham
    changeTypeNameHandler = (event) =>{

        this.setState({lastName: event.target.value}); // update state
    }
    //Phan xu ly them ten san pham
    changeNameProductHandler = (event) => {

        this.setState({emailId: event.target.value}); // update state
    }
    changeCostProductHandler = (event) => {

        this.setState({cost_product: event.target.value}); // update state
    }
    changeImageProductHandler = (event) =>{
        this.setState({image: event.target.value});
    }
   
    //Nut Huy
    cancel(){
        this.props.history.push('/products');
    }
    render(){

        return (

            <div>
                <HeaderComponent/>  
                           
                <div className="container" style = {{marginTop: "5%"}}>
                    <div className="row">
                        <div className ="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Products</h3>
                            <div className="card-body">
                                 <form >
                                     <div className="form-group">
                                        <label> Brand Name</label>
                                        {/* <input placeholder="Brand Name" name=" " className="form-control
                                        " value={this.state.firstName} onChange={this.changeBrandNameHandler}>
                                        </input>                                                                                                             */}
 
                                            
                                            <select class="form-select" aria-label="Default select example" onChange={this.changeBrandNameHandler} name="name">
                                            {this.state.category.map(mount =>  
                                                <option value={mount.name} selected > {mount.name}</option>
                                                )}       
                                            </select>
                                        
                                     </div>

                                     <div className="form-group">
                                        <label> Type Name</label>
                                        <input placeholder="Type Name" name="lastName" className="form-control
                                        " value={this.state.lastName} onChange={this.changeTypeNameHandler}></input> 
                                     </div>

                                        <label> Name Product</label>
                                     <div className="form-group">
                                        <input placeholder="Name Product" name="emailId" className="form-control
                                        " value={this.state.emailId} onChange={this.changeNameProductHandler}></input> 
                                     </div>
                                     <label> Image Of Product</label>
                                     <div className="form-group">
                                        <input placeholder="image" name="image" className="form-control
                                        " value={this.state.image} onChange={this.changeImageProductHandler}></input> 
                                     </div>
                                     <label> Cost Product</label>
                                     <div className="form-group">
                                        <input placeholder="Cost of Product" name="cost_product" className="form-control
                                        " value={this.state.cost_product} onChange={this.changeCostProductHandler}></input> 
                                     </div>
                                     <button className="btn- btn-success" onClick={this.saveProduct}> Save </button>
                                     <button className="btn- btn-danger" onClick ={this.cancel.bind(this)} style={{marginLeft: "2px"}}> Cancel</button>
                                 </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateEmployeeComponent

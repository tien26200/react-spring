import React, {Component} from "react";
import { Link } from "react-router-dom";
class HeaderComponent extends Component{


    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render(){

        return (

            <div>
                    <header>

                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                            
                            <Link to="/products" style={{color: "white", fontSize: "20px", padding: " 0 15px 0 5px"}}> Manager Category</Link>
                            <Link to="/add-category" style={{color: "white", fontSize: "20px", padding: " 0 15px 0 5px"}}> Category</Link>
                            <Link to="/add-products" style={{color: "white", fontSize: "20px"}}> Products</Link>
                            
                        </nav>

                    </header>
            </div>
        )
    }
}
export default HeaderComponent

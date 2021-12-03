import React, {Component} from "react";
import "./Nav.css"
import { Link } from 'react-router-dom'




class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchTerm:'' ,
            logout:''         
            
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();             
    
    }

    handleLogout = async (event) => {
                 
       this.props.logout()
    }





    render(){
    return(
        <div>
            
            
            <div>
                
                <nav className='topNav'>
                <Link to="/" >Home</Link>
              
                
                <Link to="/login" >Login Here</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/UserRegistration">Registration</Link>
                <Link to="/Senators" >Senators</Link>
                
                
                {/* <Link to="/ShoppingCart">Shopping Cart</Link>
                <Link to="/sellProducts" >Sell Products</Link> */}
                <Link to="/login" onClick={this.handleLogout}>Logout Here</Link>
                
                
                
                
                
                </nav>
                
            </div>
            
        </div>
        
    )
    }
}


export default Nav
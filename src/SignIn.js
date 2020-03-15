import React, {Component} from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import './App.css';
import {withAutorization} from './autorization';



class SignIn extends Component {
    
    state= {
        email: "",
        password: ""
    }
    
    handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        console.log("Email", this.state.email);
        console.log("password", this.state.password);
        event.preventDefault();
        this.props.toLogIn(this.state.email, this.state.password)
    }
    
     handleClick = () => {
       console.log("home prop", this.props.isLogged)
        // AuthorizationProvider.state.isLogged = false
        // Home.props.isLogged = false

      // this.props.toLogIn()
       // AuthorizationProvider.state.isLogged = true
       // Home.props.isLogged = false
       
       console.log("home prop", this.props.isLogged) // false 
    }
    
    render() {
        return (
        <div>
        
        
            <div class="body">
                <div class="text-vertical-center">
                <h1> SignIn. </h1>
                   <div class="form-signin">
                      <div class="panel panel-default">
                            <div class="panel-body">
                             <h2 class="black"> {this.props.isLogged ?  "You are connected!" : "You are offline"} </h2>
                             
                              <form accept-charset="UTF-8" method="post" role="form" onSubmit={ this.handleSubmit}>
                                    <div class="form-group">
                                         <input class="form-control" placeholder="E-mail" name="email" type="text" required="" autofocus="" onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                         <input class="form-control" placeholder="Password" name="password" type="password" required="" autofocus="" onChange={this.handleChange}/>
                                    </div>
                                    
                                     <button class="btn"  type="submit" onClick={this.handleClick}>
                                	     {this.props.isLogged ?  "Logout" : "Login"}
                                	    </button>
                              </form>
                              
                            </div> 
                      </div>
                    </div>


                </div>
            </div>
            
        </div>
        )
    }
}


export default withRouter (withAutorization(SignIn));
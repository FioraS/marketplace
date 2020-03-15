import React, {Component} from 'react';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import './App.css';
import {withAutorization} from './autorization';



class SignUp extends Component {
    
     state= {
        emailUp: "",
        passwordUp:"",
        confirmPassword: ""
    }
    
    handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        console.log("Email", this.state.emailUp);
        console.log("password", this.state.passwordUp);
        console.log("Confirm password", this.state.confirmPassword);
        event.preventDefault();
        this.props.ToSignUp(this.state.emailUp, this.state.passwordUp, this.state.confirmPassword)
    }
    
     handleClick = () => {
       console.log("home prop", this.props.ToSignUp)
        // AuthorizationProvider.state.isLogged = false
        // Home.props.isLogged = false

      // this.props.toLogIn()
       // AuthorizationProvider.state.isLogged = true
       // Home.props.isLogged = false
       
       console.log("home prop", this.props.ToSignUp) // false 
    }
    
    render() {
        return (
        <div>
        
        
            <div class="body">
                <div class="text-vertical-center">
                <h1> SignUp. </h1>
                   <div class="form-signin">
                      <div class="panel panel-default">
                            <div class="panel-body">
                            <h2 class="black"> {this.props.hasRegistered ?  "You are registered!" : "New here?"} </h2>
                            
                              <form accept-charset="UTF-8" method="post" role="form" onSubmit={ this.handleSubmit}>
                        
                                    <div class="form-group">
                                         <input class="form-control" placeholder="E-mail" name="emailUp" type="text" required="" autofocus="" onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                         <input class="form-control" placeholder="Password" name="passwordUp" type="password" required="" autofocus="" onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group">
                                         <input class="form-control" placeholder="Confirm password" name="confirmPassword" type="password" required="" autofocus="" onChange={this.handleChange}/>
                                    </div>
                                    <button class="btn"  type="submit" onClick={this.handleClick}>
                                	     {this.props.hasRegistered ?  "Logout" : "SignUp"}
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


export default withRouter (withAutorization(SignUp));
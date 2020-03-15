import React, {Component} from 'react';


export const AuthContext = React.createContext()


export class AuthProvider extends React.Component {
   
    state = {
        isLogged : false,
        email: "",
        password:"",
        toLogIn: (email, password) => {
            this.setState({
                isLogged: !this.state.isLogged,
                email: email,
                password: password,
            })},
        
        hasRegistered: false,
        emailUp: "",
        passwordUp:"",
        confirmPassword: "",
        ToSignUp: (emailUp, passwordUp, confirmPassword) => {
            this.setState({
                hasRegistered: !this.state.hasRegistered,
                emailUp: emailUp,
                passwordUp: passwordUp,
                confirmPassword: confirmPassword,
            })},
        
        click: 0,    
        toAddCart: (click) => {
        this.setState({
            click: click+1
        })},
        
    }
    
    render() {
    return (
       <AuthContext.Provider value ={this.state}>
            {this.props.children}
        </AuthContext.Provider>
        
        )}
}

export const withAutorization = (Component) => {
    
    class NewComponent extends Component {
        render(){
            return (
            <AuthContext.Consumer> 
            { value => <Component {...value} {...this.props}/>}
            </AuthContext.Consumer>
            )
        }
    }
    return NewComponent;
}
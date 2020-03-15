import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {withAutorization} from './autorization';

import './App.css';

import * as ROUTES from './Routes';


class Navigation extends Component {

    render() {
         console.log("nav prop", this.props);
        return (
           <div>
                <ul class="navig">
                    <li>
                        <RouterLink to={ROUTES.HOME}>
                            Marketplace
                        </RouterLink>
                    </li>
                    
                    <li>
                        <RouterLink to={ROUTES.SIGNIN}>
                            SignIn
                        </RouterLink>
                    </li>
                    
                    <li>
                        <RouterLink to={ROUTES.SIGNUP}>
                            SignUp
                        </RouterLink>
                    </li>
                    
                    
                    <p class="mail">
                        {this.props.email}
                    </p>
                    
                    <button class="btn_panier right">
                        <i classname="fas fa-cart-plus" />
                        Cart <span>{this.props.click}</span>
                    </button>
                </ul>
           </div>
        )
    }
}

export default withAutorization(Navigation);
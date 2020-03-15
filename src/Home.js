import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withAutorization} from './autorization';
import './App.css';
import rouge from './images/gel_rouge.jpg';
import marron from './images/gel_marron.jpg';
import vert from './images/gel_vert.jpg';
import multi from './images/gel_multicolore.jpg';
import rose from './images/gel_rose.jpg';
import violet from './images/gel_violet.jpg';

class Home extends Component {
 
    state = {
        click:0
    }
    
    incrementCart = (event) => {
      this.setState({ click: this.state.click + 1});
        this.props.toAddCart(this.state.click);
      
    }
   
    
    render() {
       // AuthorizationProvider.state.isLogged = true
       // Home.props.isLogged = true
       
        console.log("home prop", this.props)
        return (
        <React.Fragment>
        
        <div class="body">

             <div class="text-vertical-center">
                <h1 class="bigTitle" >THE MARKETPLACE. </h1>
                <h2 class="pink" >Our Best Sellers</h2>
    	    </div>
    	    
    
    	    
    	    <div class="range">
    	    
    	        <div class="produit">
        	        <div class="text-vertical-center">
                        <img src={rouge} class="produit-image" alt="..." />
                        <h5>HAND CLEANING GEL</h5>
                        <p>500$</p>
                        
                        <button class="btn" intValue={this.state.click}  type="submit" onClick={this.incrementCart} > ADD TO CART
                    	   
                    	    </button>
                    </div>
                </div>
                
                <div class="produit">
                 <div class="text-vertical-center">
                    <img src={marron} class="produit-image" alt="..." />
                    <h5>HAND CLEANING GEL</h5>
                    <p>500$</p>
                    <button class="btn"  type="submit" onClick={this.incrementCart} > ADD TO CART
                    	    </button>
                  </div>
                </div>
                
                <div class="produit">
                <div class="text-vertical-center">
                    <img src={vert} class="produit-image" alt="..." />
                        <h5>HAND CLEANING GEL</h5>
                        <p>500$</p>
                        <button class="btn"  type="submit" onClick={this.incrementCart} >ADD TO CART
                    	    </button>
                      </div>
                </div>
                
                <div class="produit">
                <div class="text-vertical-center">
                    <img src={multi} class="produit-image" alt="..." />
                        <h5>HAND CLEANING GEL</h5>
                        <p>500$</p>
                        <button class="btn"  type="submit" onClick={this.incrementCart} >ADD TO CART
                    	    </button>
                      </div>
                </div>
                
                <div class="produit">
                <div class="text-vertical-center">
                    <img src={violet} class="produit-image" alt="..." />
                        <h5>HAND CLEANING GEL</h5>
                        <p>500$</p>
                        <button class="btn"  type="submit" onClick={this.incrementCart} >ADD TO CART
                    	    </button>
                      </div>
                </div>
                
                <div class="produit">
                <div class="text-vertical-center">
                    <img src={rose} class="produit-image" alt="..." />
                        <h5>HAND CLEANING GEL</h5>
                        <p>500$</p>
                        <button class="btn"  type="submit" onClick={this.incrementCart} >ADD TO CART
                    	    </button>
                      </div>
                </div>

                
    	    </div>
    	   
	    </div>
	   
        </React.Fragment>
        )
    }
}

export default Home;


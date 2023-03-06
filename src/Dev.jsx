import React from "react";
import './Dev.css'

class Dev extends React.Component{
    render(){
        return(
            <div className = 'dev-icon'>
                <img 
                  className = 'icon'
                  src={this.props.image}
                />
                <div className = 'inf'>
                  <p>{this.props.lng}</p>
                  <p>{this.props.nat}</p>
                  <p>{this.props.loc}</p>
                </div>
            </div>
        );
    }
}
export default Dev;
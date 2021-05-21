import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.imgsrc} alt={this.props.title} title={this.props.title}/>
                <p>{this.props.description} </p>
            </div>
        )
    }
}
export default HornedBeast;
import React from 'react';

class HornedBeast extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.imgsrc} alt={this.props.title}/>
                <p>{this.props.description} </p>
            </div>
        )
    }
}
export default HornedBeast;
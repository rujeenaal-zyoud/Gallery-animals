import React from 'react';

class HornedBeast extends React.Component {
    //Create constructue with inhert with state to be as key for passing arrgument numberOfClike
    constructor(props){
        super(props);
        this.state ={
            numberOfFavorite :0,
        }

    }
    //Create function for increment the counter each time when clik in it
    incrementNumberOfFavorite =()=>{
        this .setState({
            
            numberOfFavorite: this.state.numberOfFavorite +1,
        })
    }
    render() {
        return (


            <div className='beast'>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} />
            </div>
        )
    }
}
export default HornedBeast;
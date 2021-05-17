import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    //Create constructue with inhert with state to be as key for passing arrgument numberOfClike
    constructor(props){
        super(props);
        this.state ={
            numberOfFav :0,
            
        }

    }
    //Create function for increment the counter each time when clik in it
    incrementNumber = ()=>{
        this .setState({
            numberOfFav: this.state.numberOfFav +1,
        })
    }
    render() {
        return (

//We want refactore this stuff props using Bootstrap

        //         <p>{this.state.catName}</p>
        // <img onClick={this.incrementNumberOfFavorite} src={this.state.imgUrll} alt={this.state.catName} />
        // <p>💙: {this.state.numberOfPets}</p> 
        // </div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    😸Number of Pats: {this.state.numberOfFav} 
                    </Card.Text>
                    <Button onClick={this.incrementNumber} variant="primary">pick</Button>
                </Card.Body>
            </Card>




        )
    }
}
export default HornedBeast;
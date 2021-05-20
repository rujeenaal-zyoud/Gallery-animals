import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card' ;

class SelectedBeast extends React.Component{

//this function for hidden the model when clike the close
  hiddenModel=()=>{
    this.props.hiddenModel()
}
    render(){
        return(
          //need to render model from bootstrtap url
            <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.element.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={this.props.element.image_url} alt="img" className="img-fluid"/>
              <br></br>
              {this.props.element.description}
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hiddenModel}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        )
    }
}
export default SelectedBeast;
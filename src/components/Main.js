/*eslint-disable*/

import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json';
import { Form, Modal } from 'react-bootstrap/';

class Main extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     hornsDataArr:hornsData,
  //     // newArr:this.props.info,
  //     show:true
  //   }
  // }

  //   handleClose = () =>{
  //     this.setState({
  //         show:false
  //     })
  // }
  //now create the function that da filterCards when submitForm it's done

  filterCards = (event) => {
    let number = parseInt(event.target.value)
    let horns = hornsData;
    let newArr;
    if (number) {
      newArr = horns.filter((item) => {
        if (item.horns === number)
          return item;
      })
    }
    else {
      newArr = horns
      //this.props.hornsData
    }
    this.setState({
      hornsDataArr: newArr
    })
    this.props.renderFilterItem(newArr);

  }
  render() {

    return (
      <div>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>number of horns</Form.Label>

            <Form.Control as='select' onChange={this.filterCards} custom >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">WOOW</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '4rem' }}

        >

          {this.props.hornsDataArr.map((item, i) => {
            return (
              < HornedBeast
                key={i}
                title={item.title}
                imgUrl={item.image_url}
                description={item.description}
                horns={item.horns}
                renderModel={this.props.renderModel}
                renderShow={this.props.renderShow}
              />
            )
          })}

        </div>

      </div>


    )

  }
}
export default Main;
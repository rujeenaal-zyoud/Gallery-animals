import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json';
import { Form } from 'react-bootstrap/';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hornsData:hornsData,
      show:true
    }
  }

  handleClose = () =>{
    this.setState({
        show:false
    })
}
   //now create the function that da filterCards when submitForm it's done
   
   filterCards=(event)=>{
     let number=event.target.value
     console.log(number);
     let newArr;
    if(number){
      newArr=hornsData.filter((item)=>{
       if(item.horns === number)
        return item; 
          })
      }
      else{
        newArr=hornsData;

      }

       this.props.renderFilterItem(hornsData);

    }
  render(){

    return (
      <div>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>number of horns</Form.Label>

            <Form.Control as='select' onChange={this.filterCards} custom >
              <option  value="0">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">WOOW</option>
            </Form.Control>
          </Form.Group>
        </Form>
    
    <div   style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '4rem' }}

>
      
    {hornsData.map((item, i) => {
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
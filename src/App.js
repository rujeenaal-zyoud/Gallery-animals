import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import hornsData from './components/hornsData.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {


 
  constructor(props) {
    super(props);
    this.state = {
        data:hornsData,
        showBeast : true,
        selected:{},

    }
  }

 hiddenModel =()=>{
    this.setState({
     showBeast :false ,
   
    }) 
   }

   renderSelected=(title)=>{
     let selectCard = hornsData.find(element =>{
if (element.title === title){
  return element
}
     })
this.setState({
  showBeast: true,

})

   }


  render(){
    return(
      <>
        <Header/>
        <Main hornsData={this.state.hornsData}  renderSelected={this.renderSelected}   />
        <SelectedBeast show={this.state.show}  hiddenModel={this.state.hiddenModel}  />
        <Footer/>
      </>
    )
  }
}

export default App;
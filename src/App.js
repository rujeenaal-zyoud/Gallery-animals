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
      hornsDataArr: hornsData,
      showBeast: true,
      dataShow: {},
      display: false,

    }
  }

  hiddenModel = () => {
    this.setState({
      display: false,

    })
  }

  renderShow = (paramet) => {
    let selectCard = hornsData.find(element => {
      if (element.title === paramet) {
        return element;
      }
      return element;
    })
    this.setState({
      display: true,
      dataShow: selectCard,
    })
    return paramet;
  }

  renderFilterItem=(parameter)=>{
    this.setState({
      hornsDataArr:parameter,
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main hornsDataArr={this.state.hornsDataArr}  renderShow={this.renderShow} renderFilterItem={this.renderFilterItem} />
        <SelectedBeast show={this.state.display} hiddenModel={this.hiddenModel} element={this.state.dataShow} />
        <Footer />
      </>
    )
  }
}

export default App;
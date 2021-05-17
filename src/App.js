  
import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import Main from './components/main';

class App extends React.Component {
  render(){
    return(
      <>
        <Header/>
        <Main />
        <Footer/>
      </>
    )
  }
}

export default App;
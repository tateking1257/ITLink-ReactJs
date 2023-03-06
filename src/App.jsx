import React from 'react';
import Header from './Header';
import Topt from './Topt';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Topt />
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;

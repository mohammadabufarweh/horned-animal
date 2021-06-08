import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './component/SelectedBeast';
import images from './component/data.json';



class App extends React.Component {

  constructor(props) {
  
    super(props);
    this.state = {
  
      horndArray: images, show: false,
  
    }
  }
  
  falseState = ()=> {
    this.setState({show:false})
  }
  trueState = ()=> {
    this.setState({show:true})
  }
  
  
  
  
  
    render() {
      return (
        
        <div>
          <Header />
  
          <Main horndArray = {this.state.horndArray} trueState={this.trueState}/>
  
          <Footer />
          <SelectedBeast show={this.state.show}
                  falseState={this.falseState}
                    title={images.title}
                    images={images.images}
                  
                     description={images.description} 
                     />
                     
        </div>
      )
    }
  }
  export default App;

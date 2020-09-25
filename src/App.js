import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      person:{FullName:"Ahmed",Bio:"",Profession:"Ingénieur"},
      on:true
      

     }
  }
  render() { 
    return ( <div>
      <p style={{border:"2px solid black", padding:"10px 20px"}} onClick={()=>this.setState({on:!this.state.on})}>Turn {this.state.on===true?"on":"off"}</p>
     
    </div> );
  }
}
 
export default App;
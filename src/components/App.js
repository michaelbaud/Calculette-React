import React, { Component } from 'react';
import '../tachyon.css'
import Touche from './Touche'

class App extends Component {

  state = {
    input: '',
    clickEgal: false,
    touches: [0,1,2,'+',3,4,5,'*',6,7,8,'-',9,'/','C','.','=']
  }

  recupTouches = (e) => {
    const touch = e.currentTarget.value
    if(touch === '=') {
      this.setState({input:eval(this.state.input), clickEgal:true})
    }
    else if(touch === 'C') {
      this.setState({input:''})
    }
    else {
      if(this.state.clickEgal) {
        this.setState({input:touch, clickEgal:false})
      }
      else {
        this.setState({input:this.state.input + touch})
      }
    }
  }

  render() {

    const afficheTouches = this.state.touches.map((element, i) => {
      return <Touche touche={element} recupTouches={this.recupTouches} key={i}/>
    })

    return (
      <div className="tc mt5 w5 center br3 pv3 ph2 bg-mid-gray shadow">
        <input className='mb3' type='text' id='result' value={this.state.input}></input>
        <br/>
        {afficheTouches}
      </div>
    );
  }
}

export default App;

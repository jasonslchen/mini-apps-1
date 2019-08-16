import React from 'react';
import ReactDOM from 'react-dom';
import Placement from './placement.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: true,
      class: ''
    }

    // <div className="red"></div>;
    //true = red, false = blue;
    
    this.onConnect = this.onConnect.bind(this);
  }
  
  createPlacement(value) {
    return (<Placement id={value} player={this.state.player} click={this.onConnect} />)
  }

  onConnect(event) {
    if (!event.target.className) {
      let spot = document.getElementById(event.target.id);
      if (this.state.player) {
        this.setState({
          player: false
        })
      } else {
        this.setState({
          player: true
        })
      }
    }
  }


  render() {
   return (<table className="table">
      <tbody>
        <tr>
          {this.createPlacement('A1')}
          {this.createPlacement('A2')}
          {this.createPlacement('A3')}
          {this.createPlacement('A4')}
          {this.createPlacement('A5')} 
          {this.createPlacement('A6')} 
        </tr>
        <tr>
          {this.createPlacement('B1')}
          {this.createPlacement('B2')}
          {this.createPlacement('B3')}
          {this.createPlacement('B4')}
          {this.createPlacement('B5')} 
          {this.createPlacement('B6')} 
        </tr>
        <tr>
          {this.createPlacement('C1')}
          {this.createPlacement('C2')}
          {this.createPlacement('C3')}
          {this.createPlacement('C4')}
          {this.createPlacement('C5')} 
          {this.createPlacement('C6')} 
        </tr>
        <tr>
          {this.createPlacement('D1')}
          {this.createPlacement('D2')}
          {this.createPlacement('D3')}
          {this.createPlacement('D4')}
          {this.createPlacement('D5')} 
          {this.createPlacement('D6')} 
        </tr>
        <tr>
          {this.createPlacement('E1')}
          {this.createPlacement('E2')}
          {this.createPlacement('E3')}
          {this.createPlacement('E4')}
          {this.createPlacement('E5')} 
          {this.createPlacement('E6')} 
        </tr>
        <tr>
          {this.createPlacement('F1')}
          {this.createPlacement('F2')}
          {this.createPlacement('F3')}
          {this.createPlacement('F4')}
          {this.createPlacement('F5')} 
          {this.createPlacement('F6')} 
        </tr>
        <tr>
          {this.createPlacement('G1')}
          {this.createPlacement('G2')}
          {this.createPlacement('G3')}
          {this.createPlacement('G4')}
          {this.createPlacement('G5')} 
          {this.createPlacement('G6')} 
        </tr>
      </tbody>
    </table>)
  }
}

export default Table
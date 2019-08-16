import React from 'react';
import ReactDOM from 'react-dom';


class Placement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
    this.determineColor = this.determineColor.bind(this);
  }
  
  determineColor(e) {
    if (this.props.player) {
      this.setState({
        color: 'red'
      })
    } else {
      this.setState({
        color: 'blue'
      })
    }
  }




  render() {
    
    return (<td id={this.props.id} className={this.state.color} onClick={(event) => {this.props.click(event); this.determineColor()}}></td>
  )}
}

export default Placement
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  


  render() {
    return (
    <div>
      <h2>Connect Four</h2>
      <Table />
      </div>
    )  
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
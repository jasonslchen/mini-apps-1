import React from 'react';
import ReactDOM from 'react-dom';


var Placement = (props) => {
  return (
    <td id={props.id} onClick={props.click}></td>
  )
}

export default Placement
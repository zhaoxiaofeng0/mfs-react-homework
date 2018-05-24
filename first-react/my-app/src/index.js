import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello world
        </div>
      );
    }
  }
  ReactDOM.render(<HelloMessage />, document.getElementById("root"));
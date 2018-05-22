import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  ReactDOM.render(<HelloMessage name="world" />, document.getElementById("root"));
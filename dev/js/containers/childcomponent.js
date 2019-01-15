import React, {Component} from 'react';

class ChildComponent extends Component
{
    callparent(n)
    {
        this.props.onClick(n);
    }
    render(){
    return (
    
            <button onClick={this.callparent.bind(this,35)}>
              1
            </button>
    )
    };
  }
  

export default ChildComponent;

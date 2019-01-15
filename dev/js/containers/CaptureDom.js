import React, {Component} from 'react';
import ChildComponent from './childcomponent';

class CaptureDom extends Component
{
    capturedom()
    {
        console.log(document.documentElement.innerHTML);
    }
    
    handlePageSelected(n) {
        console.log(n);
    }

    render(){
        return (
                <div>
                    <button onClick={this.capturedom}>CaptureDom</button>
                </div>
        );
    }
}
export default CaptureDom;

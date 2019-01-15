import React, {Component} from 'react';
import Test from './test'

class MainContainer extends Component{
    /*constructor(props) {
        super(props);
        this.updateCommenttext = this.updateCommenttext.bind(this);
      }
    */
    updateCommenttext() {
        console.log("updatecommentext1111");
    }

    render() {
        return (
            <div>
                Container
                <hr/>
                <Test updateCommenttext={this.updateCommenttext.bind(this)} title="testtitle" name="testname" address="testaddress" />
                <Test>Test Description</Test>
            </div>
        );
    }
}

export default MainContainer;
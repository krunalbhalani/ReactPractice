import React, {Component} from 'react';

class Test extends Component
{
    /*
    constructor(props){
        super(props);
        console.log(this.props); 
    }
    */
   

    render(){
        console.log(this.props.updateCommenttext);
        const { title, name, address } = this.props;
        return(
            <div>
                Properties : <span>{title} - {name} - {address}</span>
                <hr/>
                Childres : {this.props.children}
                <hr/>
                <br/><br/>
            </div>
        );
    }
}

export default Test;
import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component{
    render(){
        if (!this.props.movie) {
            return (<div>Select a Movie...</div>);
        }
        return (
            <div>
                <h2>Name: {this.props.movie.name}</h2>
                <h3>Genre: {this.props.movie.genre}</h3>
                <h3>Year: {this.props.movie.year}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movie
    };
}

export default connect(mapStateToProps)(MovieDetail);

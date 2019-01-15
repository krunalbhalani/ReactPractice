import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMovie,deleteMovie,markMovie} from '../actions/index'

class MovieList extends Component
{
    capturedom()
    {
        console.log(document.documentElement.innerHTML);
    }
    renderList()
    {
        return this.props.movies.map((m) => {
            return (
                <li key={m.id}>
                {m.completed ? <b>{m.name}</b> : m.name}
                                
                <input type="button" value="Select" onClick={()=> this.props.selectMovie(m)} />
                <input type="button" value="Delete" onClick={()=> this.props.deleteMovie(m.id)} />
                <input type="button" value="MarkMovie" onClick={()=> this.props.markMovie(m.id)} />
                <button type="button" onClick={this.capturedom}>Capture Dom</button>
                </li>
            );
        });
    }
    render(){
        return(
            <ul>
               {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies.movies
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectMovie, deleteMovie, markMovie}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList);

import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import MovieList from '../containers/movie-list';
import MovieDetail from '../containers/movie-detail';
import MainContainer from '../containers/mainContainer';
import CaptureDom from '../containers/CaptureDom';
import TimelineComponent from '../containers/timelinecomponent';
import JsonFormatComponent from '../containers/Jsonformatcomponent';

require('../../scss/style.scss');

const App = () => (
    <div>
        <TimelineComponent />
    </div>
);

export default App;

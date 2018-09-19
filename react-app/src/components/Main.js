import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Login} from './../features/Login';
import {CourseList} from './../features/CourseList';
import {Course} from './../features/Course';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <main>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/login' component={Login}/>
                <Route path='/courses' component={CourseList}/>
                <Route path='/courses/new' component={Course}/>
            </Switch>
        </main>
    }
}
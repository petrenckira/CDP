import React from 'react';
import {Link} from 'react-router-dom';

export class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <h1>Courses</h1>
            <div className="course-item">

                <div className="row">
                    <div className="col-md-10">
                        <h2>name</h2>
                        <p>duration, description, date</p>
                    </div>
                    <div className="col-md-2">
                        <Link to="/courses/new" className="btn btn-success btn-block">Edit</Link>
                        <Link to="/courses/new" className="btn btn-danger btn-block">Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    }
}
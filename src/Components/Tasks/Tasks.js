import React from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

const Task = ({task}) => {
    

    return (
        <div  className="col-md-3">
            <Link to={`/registration/${task.name}`}>
                <img src={require(`../../Images/${task.pic}`)} alt=""/>
                <h4>{task.name}</h4>
            </Link>
        </div>
    );
};

export default Task;
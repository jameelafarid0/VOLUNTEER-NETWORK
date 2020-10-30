import React, { useContext, useEffect, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import './Home.css'


const Home = () => {
    
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://radiant-beach-49764.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className="main-container">
            <p > I GROW BY HELPING PEOPLE IN NEED</p>
            <div>
                <div className="row">
                    {
                        tasks.map(task => <Tasks
                            key={task._id} task={task}></Tasks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;






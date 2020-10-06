import React, { useContext, useEffect, useState } from 'react';
import { VolunteerEvents } from '../../App';
import UserRegisterDetails from '../UserResgisterDetails/UserRegisterDetails';


const UserDetails = () => {
    const { loggedUserState } = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;
    const [userTask, setUserTask] = useState([]);

    useEffect(() => {
        fetch('https://radiant-beach-49764.herokuapp.com/userTask?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserTask(data))
    }, [loggedInUser.email]);

    return (
        <div className="container">
            <div className="row">
                {userTask.map(taskInfo => <UserRegisterDetails key={taskInfo._id}
                    taskInfo={taskInfo}></UserRegisterDetails>)}
            </div>
        </div>
    );
};

export default UserDetails;
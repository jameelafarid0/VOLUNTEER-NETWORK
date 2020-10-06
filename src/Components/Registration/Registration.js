import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { VolunteerEvents } from '../../App';
import './Registration.css';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { task } = useParams();
    const { loggedUserState } = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;


    const date = new Date()

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('https://radiant-beach-49764.herokuapp.com/addUserList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    return (
        <div>
            <form className="col" onSubmit={handleSubmit(onSubmit)}>
                <h4>Register as a Volunteer</h4>
                <input
                    type="text"
                    name="fullName"
                    placeholder="FullName"
                    defaultValue={loggedInUser.username}
                    className="form-input"
                    ref={register({ required: true })}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={loggedInUser.email}
                    className="form-input"
                    ref={register({ required: true })}
                />
                <input
                    type='date'
                    name="date"
                    defaultValue={date.toDateString('dd/MM/yyyy')}
                    ref={register({ required: true })}
                />
                <input
                    type="text"
                    name="description"
                    defaultValue="Description"
                    className="form-input"
                    ref={register({ required: true })} />
                <input
                    name="taskName"
                    type="text"
                    defaultValue={task}
                    className="form-input"
                    ref={register({ required: true })} />

                <input type="submit" className="register-btn"
                    value="Registration" />
                {loggedInUser.email &&
                    <Link to="/userTask"> <button
                        className="register-btn"> see your registration </button> </Link>
                }
                    


           
               
            </form>






        
                       
         </div >        
    )
};

export default Registration;

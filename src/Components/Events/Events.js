import React from 'react';
import eventsInfo from '../../fakeData/eventsInfo'


const Events = () => {
    const handleAddTask = () =>{
        fetch('https://radiant-beach-49764.herokuapp.com/addTask', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventsInfo)
        })

    }

    return (
        <div>
            <button onClick={handleAddTask}>add task</button>
        </div>
    );
};

export default Events;

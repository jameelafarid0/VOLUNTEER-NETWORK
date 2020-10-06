import React from 'react';   

const UserRegisterDetails = ({ taskInfo }) => {
    const handleDelete = (id) => {
        fetch(`https://radiant-beach-49764.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json)
            .then(result => {
                // console.log('deleted successfully');
            })
    }
    return (
        <div className="col-md-6">
            <div style={{ width: "200px" }}>
                <img src={require('../../Images/libraryBooks.png')}
                    className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{taskInfo.taskName}</h5>
                    <p className="card-text">{taskInfo.date}</p>
                    <button
                        onClick={() => handleDelete( `${taskInfo._id}`)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UserRegisterDetails;

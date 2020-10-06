import React, { useContext } from 'react';
import './Header.css';
import logo from '../../logo/Group 1329.png'
import { Link } from 'react-router-dom';
import { VolunteerEvents } from '../../App';

const Header = () => {

    const { loggedUserState} = useContext(VolunteerEvents);
    const [loggedInUser, setLoggedInUser] = loggedUserState;

    return (
        <div>
            <nav>
                <img className="logo" style={{ marginTop: "10px" }} src={logo} alt="" />
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/donation">Donation</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    
                    <Link to="/registration"><button style={{ backgroundColor: "orange", border: "none", borderRadius: "2px" }}>Register</button></Link>
                    <Link to="/admin"><button style={{ backgroundColor: "orange", border: "none", borderRadius: "2px" }}>Admin</button></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

import { UserContext } from "../context/UserContext";

import ExplodingBomb from '../components/ExplodingBomb';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="Dashboard componentBox">
            <h1>Dashboard</h1>

            <Outlet />            
            <button onClick={() => navigate('/dashboard/tasks')}>Show Tasks</button>
            <button onClick={() => navigate('/dashboard/messages')}>Show Messages</button>
            <ExplodingBomb/>

        </div>
    )
}

export function DashboardMessages(props) {
    const { username } = React.useContext(UserContext);

    return (
        <div className="DashboardMessages">
            <p>Welcome to your dashboard, {username}</p>
        </div>
    )
}

export function DashboardTasks(props) {

    const tasks = [
        {
            id: 1,
            name: 'learn React'
        },
        {
            id: 2,
            name: 'decide on capstone project'
        },
        {
            id: 3,
            name: 'sleep'
        },
        {
            id: 4,
            name: 'learn databases'
        }
    ]

    return (
        <div className="DashboardTasks">
            <ul className="tasks">
                {tasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard
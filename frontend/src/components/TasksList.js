import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Task from './Task'

const TasksList = () => {


    const [task, setTask] = useState(
        [{description: ''}]
    );

    const [newTask, setNewTask] = useState({
        description: ''
    })


    const getTasks = async () => {
        
        const apiCall = await fetch('http://localhost:4000/api/tasks');
        const tasks = await apiCall.json();

        console.log('tasks status', tasks.status);


        setTask(tasks);
    }

    useEffect(() => {
        getTasks();
    }, [task])

    
    const handleChange= (event)=>{
        const {name, value} = event.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log('new description: ', newTask);
    }

    const saveTask = () => {
        axios.post(`http://localhost:4000/api/tasks/`, newTask)
            .then((res) => {
                console.log("tasks: ", task);
            })
            .catch((err) => {
                console.log(err);                
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        saveTask();
    }
    
    return (
        <>
            <div className="mt-5">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h1>TODO List</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <div className="input-group w-100">
                            <input 
                                type="text" 
                                name="description" 
                                placeholder="I have to..."
                                className="form-control"
                                onChange={handleChange}>
                            </input>
                            <div className="input-group-append">
                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-primary">
                                </input>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
            {
                task.map((task, i) => (
                    <Task key={i} 
                    task={task}
                    ></Task>
                ))
            }
        </>
    )
}

export default TasksList;

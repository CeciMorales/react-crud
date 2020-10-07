import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Task from './Task'

const TasksList = () => {


    const [task, setTask] = useState([]);

    const [newTask, setNewTask] = useState({
        description: ''
    })


    const getTasks = async () => {
        const resultTasks = await axios(
            'http://localhost:4000/api/tasks'
        );
        setTask(resultTasks.data)
        console.log(resultTasks.data);
    }

    useEffect(() => {
        getTasks();
    }, [])

    
    const handleChange=e=>{
        const {name, value} = e.target;
        setNewTask(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log('new description: ', newTask);
    }

    const saveTask = async () => {
        await axios.post(`http://localhost:4000/api/tasks/`, newTask)
            .then((res) => {
                //setTask(task.concat(newTask));
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
                    <Task key={i} task={task}></Task>
                ))
            }
        </>
    )
}

export default TasksList;

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Task = ({ task }) => {

    const [selectedTask, setSelectedTask] = useState([]);

    const handleEdit = async (event) => {
        event.preventDefault();
        console.log("task id: ", task.id);
        await axios.put(`http://localhost:4000/api/tasks/${task.id}`)
            .then((res) => {
                //setTask(task.concat(newTask));
                console.log("tasks: ", task);
            })
            .catch((err) => {
                console.log(err);                
            });
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        console.log("task id: ", task.id);
        await axios.delete(`http://localhost:4000/api/tasks/${task.id}`)
            .then((res) => {
                //setTask(task.concat(newTask));
                console.log("tasks: ", task);
            })
            .catch((err) => {
                console.log(err);                
            });
    }

    const getTask = async () => {

        const resultTask = await axios(
            `http://localhost:4000/api/tasks/${task.id}`
        );

        // console.log(resultTask.data);
        setSelectedTask(resultTask.data);
        console.log(selectedTask);
    }

    useEffect(() => {
        getTask();
    }, [])
        

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card my-3">
                            <div className="card-body">
                                <p className="card-text">
                                    {task.description}
                                </p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <input 
                                                    type="submit" 
                                                    value="View"
                                                    className="btn btn-primary"
                                                    onClick={getTask}
                                                    ></input>
                                            </form>
                                        </div>

                                        <div className="col">

                                            <form>
                                                <input 
                                                    type="submit" 
                                                    value="Done"
                                                    className="btn btn-warning"
                                                    onClick={handleEdit}
                                                    ></input>
                                            </form>
                                        </div>
                                        <div className="col">
                                            <form>
                                                <input 

                                                    type="submit" 
                                                    value="Delete"
                                                    className="btn btn-danger"
                                                    onClick={handleDelete}
                                                    ></input>
                                            </form>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Task;
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const Task = ({ task }) => {

    const [doneTask, setDoneTask] = useState('white');


    const handleEdit = async (event) => {
        event.preventDefault();
        console.log("task id: ", task.id);
        await axios.put(`http://localhost:4000/api/tasks/${task.id}`)
            .then((res) => {
                //setTask(task.concat(newTask));
                console.log("tasks: ", task);
                setDoneTask('whitesmoke');
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

    
        

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        { task.status === 'pending'
                        ?
                            <div className='card my-3'>
                                <div className="card-body">
                                    <p className="card-text">
                                        {task.description}
                                    </p>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={`/${task.id}`}>
                                                    <button 
                                                        className="btn btn-primary"
                                                    >View</button>
                                                </Link>
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
                        :
                            <div className='card my-3 bg-light'>
                                <div className="card-body">
                                    <p className="card-text">
                                        {task.description}
                                    </p>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={`/${task.id}`}>
                                                
                                                    <button 
                                                        className="btn btn-primary"
                                                    >View</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                
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
                        }
                    </div>
                </div>   
            </div>
        </>
    )
}

export default Task;
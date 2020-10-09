import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useParams } from "react-router-dom";  

const TaskDetail = () => {

    const [selectedTask, setSelectedTask] = useState([]);

    
    // obtener datos de la url 
    let { id } = useParams(); 
    console.log('id individual: ', id);

    const getTask = async () => {

        const resultTask = await axios(
            `http://localhost:4000/api/tasks/${id}`
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
            <div className="card text-center mt-5">
                <div className="card-header">
                    id: {selectedTask.id}
                </div>
                {selectedTask.status === 'pending' 
                ?
                    <div className="card-body">
                        <p className="card-text">{selectedTask.description}</p>
                    </div>
                :
                    <div className="card-body bg-light">
                        <p className="card-text">{selectedTask.description}</p>
                    </div>
                }
                
                <div className="card-footer text-muted">
                    estatus: {selectedTask.status}
                </div>
            </div>
        </>
    )
}

export default TaskDetail;

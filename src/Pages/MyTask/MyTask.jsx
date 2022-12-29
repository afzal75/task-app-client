import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
// import NoteModal from './NoteModal';
import Loader from './../Shared/Loader/Loader';
import Task from './Task';
import TaskModal from './TaskModal';

const MyTask = () => {
    const { user } = useContext(AuthContext)
    const [taskData, setTaskData] = useState(null)
    const navigate = useNavigate()

    const { data: notes = [], isLoading, refetch } = useQuery({
        queryKey: ['notes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/tasks/${user?.email}`);
            const data = res.json();
            return data
        }
    })
    //booking modal close handle
    const closeModal = () => {
        setTaskData(null);
    }
    // handle deleted note
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setTaskData(null);
                toast.success('Deleted note.')
                refetch()
            })
    }



    const handleCompleted = (id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ completed: true })
        })
            .then(res => res.json())
            .then(data => {
                navigate('/completed-task')
                toast.success('Completed')
            })
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 min-h-screen lg:mx-11 mx-3 mt-11 pb-24'>
                {
                    notes.map(n => <Task
                        key={n._id}
                        n={n}
                        setTaskData={setTaskData}
                    ></Task>)
                }
            </div>
            <TaskModal
                closeModal={closeModal}
                taskData={taskData}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
            />
        </div>
    );
};

export default MyTask;
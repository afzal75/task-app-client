import React from "react";
import { Link } from "react-router-dom";

function TaskModal({ closeModal, taskData, handleDelete, handleCompleted }) {
    return (
        <>
            {taskData ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                                {/*header*/}
                                <div className="flex justify-end p-2 mt-20">
                                    <Link to={`/update-task/${taskData._id}`}
                                        className="py-3 px-4 rounded-md uppercase font-semibold text-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md hover:shadow-slate-900"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        className="py-3 px-4 rounded-md uppercase font-semibold text-slate-100 bg-gradient-to-r from-pink-600 to-red-800 hover:shadow-md hover:shadow-slate-900 ml-2"
                                        type="submit"
                                        onClick={() => handleDelete(taskData._id)}
                                    >
                                        Delete
                                    </button>

                                </div>
                                {/*note*/}
                                <div className="p-5 rounded-t text-lg pt-24">
                                    <p>{taskData.note}</p>
                                </div>
                                {/*note image*/}
                                {
                                    taskData?.image && <div className="relative p-6">
                                        <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                            <img className='w-full max-h-[500px] max-w-lg p-3 mx-auto' src={taskData?.image} alt="" />
                                        </div>
                                    </div>
                                }

                                {/*footer*/}
                                <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b p-2">

                                    <div>
                                        <label
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </label>
                                        <button
                                            className="py-3 px-4 rounded-md uppercase font-semibold text-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-md hover:shadow-slate-900"
                                            type="submit"
                                            onClick={() => handleCompleted(taskData._id)}
                                        >
                                            Completed
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )
                :
                null
            }
        </>
    );
}
export default TaskModal;
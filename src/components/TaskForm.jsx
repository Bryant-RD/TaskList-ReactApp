import React, {useRef } from 'react'
import { LEVEL } from '../models/level.enum';
import { Task } from '../models/task.class';

const TaskForm = ({add}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('')
    const levelRef = useRef('');


    const createTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )

        add(newTask)
    }
    

  return (
    <form className='flex flex-col'>
        <h2 className='text-blue-600 text-lg font-bold w-full text-center' >Form Task</h2>
        <div className='flex my-2'>
            <label htmlFor="name">Name</label>
            <input 
                className="ml-3 p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                type="text" 
                id='name' 
                ref={nameRef}
            />
        </div>
        <div className='my-2'>
            <label htmlFor="description">Description</label>
            <textarea rows="3"
                className="p-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                id="descrption" 
                ref={descriptionRef} ></textarea>
        </div>
        <div className='flex my-2'>
            <label htmlFor="selectLevel">Level</label>
            <select className='ml-3 w-1/3 rounded border shadow-sm border-slate-300'  name='level' id='selectLevel' ref={levelRef}>
                <option value={LEVEL.NORMAL}>Normal</option>
                <option value={LEVEL.PRIORITY}>Priority</option>
                <option value={LEVEL.URGENT}>Urgent</option>
            </select>
        </div>
    <div className='flex justify-center'>
        <button
            className='text-white font-bold bg-blue-600 w-1/5 lg:w-auto text-center rounded p-1'
                onClick={createTask}
            >Create Task
        </button>
    </div>
    </form>
  )
}

export default TaskForm
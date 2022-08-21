import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { LEVEL } from '../models/level.enum';
import { Task } from '../models/task.class'

function TaskComponent({task, remove, toComplete}) {

  useEffect(() => {
    console.log("Task created");
  }, [task])
  

  const textComplited = (state) => {
    if(state == true) {
      return (<p>completada</p>)
    }  else {
      return (<p>No Completada</p>)
    } 
  }


const taskPriority = () => {
  switch (task.level) {
    case LEVEL.NORMAL:
    
    return (
      <td> <span className='bg-blue-500 font-bold rounded-md p-2' >{task.level}</span> </td>
    )

    case LEVEL.PRIORITY:
    
      return (
        <td> <span className='bg-yellow-300 font-bold rounded-md p-2' >{task.level}</span> </td>
      )

      case LEVEL.URGENT:
    
        return (
          <td> <span className='bg-red-600 font-bold rounded-md p-2' >{task.level}</span> </td>
        )

    default:
      break;
  }
}
  

  return (
    <tr >
      <td> {task.name} </td>
      <td> {task.description} </td>
      {taskPriority()}
      <td>
        <button onClick={ () => toComplete(task) }>
          {textComplited(task.completed)}
          {/* {task.completed ? (<p>Completada</p>): (<p>No completada</p>)} */}
        </button>
        </td>
      <td> 
        <button 
          className='bg-blue-600 py-1 px-2 text-sm text-white font-bold rounded-lg'
          onClick={(e) => {
            e.preventDefault();
            remove(task);
          }}
        >
          x
        </button>
      </td>
  </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

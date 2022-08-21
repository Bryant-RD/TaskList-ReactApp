import { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import TaskComponent from '../components/TaskComponent'
import TaskForm from '../components/TaskForm';
import { LEVEL } from '../models/level.enum';
import { Task } from '../models/task.class';

function TaskList() {
  const tast1 = new Task("Fregar", "Tengo que ir a fregar cuando imprima esto", false, LEVEL.PRIORITY)
  const tast2 = new Task("dormir", "Tengo que dormirme ya", false, LEVEL.URGENT)
  const tast3 = new Task("cenar", "Tengo que preparar algo de cena", true, LEVEL.NORMAL)

  const [tasks, setTaks] = useState([tast1, tast2, tast3]);

  useEffect(() => {
    console.log("taskChange");
  
  }, [tasks])
  

  const addTask = (task) => {
    console.log(`Task: ${task.name} is new`);
    const index = tasks.indexOf(task);
    const aux = [...tasks];
    aux.push(task);
    setTaks(aux);
  }

  const deleteTask = (task)=> {
    console.log("task to delete: ",task);
    const temp = tasks.filter( item => item !== task );
    setTaks(temp)
  }

  const completeTask = (task) => {

    console.log(`Task: ${task.name} is completed`);
    const index = tasks.indexOf(task);
    const aux = [...tasks];
    aux[index].completed = !aux[index].completed;
    setTaks(aux);
  }
  return (
    <div className='container mt-10 mb-auto lg:mx-32 bg-white p-3 h-auto'>
      <h2 className='text-blue-600 text-lg font-bold w-full text-center' >Task List</h2>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/5 mr-3'>
          <TaskForm add={addTask} />
         </div>
         <table className='w-full text-center'>
          <thead>
            <tr className='text-blue-600'>
              <th>Name</th>
              <th>Description</th>
              <th>Level</th>
              <th>Complited</th>
            </tr>
          </thead>
          <tbody>
          {
            tasks.map( (task, index) => {
              return (
                <TaskComponent key={index} task={task} remove={deleteTask} toComplete={completeTask} />
              )
            })
          }
          </tbody>
         </table>
      </div>
    </div>
  )
}


export default TaskList

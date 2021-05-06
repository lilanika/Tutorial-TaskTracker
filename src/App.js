import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
//this is a hook //
import AddTask from './components/AddTask';

const App = () => {

  //zwei Zustände 
  const [showAddTask, setShowAddTask] = useState(false)
  
  // 1.what we want a call a piexe of state name, 2. funktion that will update the state  => when we wanna change the state we will use setTasks. 

  const [tasks, setTasks] = useState ([
    {
      id:1, 
      text:'React lernen ', 
      day:'monday',
      reminder:true,
    },
    {
      id:2, 
      text:'Kaffee kaufen ', 
      day:'monday',
      reminder:true,
    },
    {
      id:3, 
      text:'Yoga', 
      day:'monday',
      reminder:true,
    }
  ]
)

//Add Task  
const addTask = (task) => {
  console.log('übergebenes task', task)
  //generiere eine random id 
  const id = Math.floor(Math.random() * 10000) + 1
  console.log(id)
// spread operator bringt task and I together
//wobei task die input informationen sein werden 
  const newTask = { id, ...task}
  console.log('newTask', newTask)
  // das hier updatedet den state und zeigt es somit der UI
  setTasks([...tasks, newTask])

}

// Delete Task 
const deleteTask =( id) => {
  setTasks(tasks.filter((task)=> 
 task.id !==id
  ))
}

// Toggle Reiminer 
const toggleReminder = (id) => {
 setTasks(tasks.map((task)=> task.id === id ? 
 {...task, reminder: !task.reminder} : task
 ))
}




  return (
    <div className="container">
     <Header 
     /*Header componente bekommt neue funktion übergeben beim Klick ausgelöst*/ 
     /* update showAddTask to true*/
     toggleButton={ ()=> setShowAddTask(!showAddTask)}
     showAdd={showAddTask}

     title ="Task Tracker"/>

 {/* if showAddTask is true than show componente AddTask*/ }
    { showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? (
      <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}

      />      
     ) : (
       'No task to show'   
     )}
     {/* <Tasks tasks={tasks} onDelete={deleteTask}/> */}
    </div>
  )
}

export default App;

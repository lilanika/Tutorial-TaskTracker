import React from 'react'
import {useState} from'react'


const AddTask= ({onAdd}) => {


  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){   
      alert('Please add a task')
      return
    }

   //invoking the addTask function 
    onAdd({text , day, reminder})
 
     //Clear form 
    setText('')
    setDay('')
    setReminder(false)
   
  }
  
  //zum beobachten der State Veränderung 
  console.log('Hi from AddTask', onAdd)

  return (
    <form className="add-form" onSubmit={onSubmit} >
    <div className="form-control">
    <label>Task</label>
    <input type="text" 
    placeholder="Add Task"
     value={text} 
     onChange={(e) => setText(e.target.value)} 
    />
    </div>
    <div className="form-control">
    <label>Day</label>
    <input type="text" 
    placeholder="Add Day"
    value={day} 
     onChange={(e) => setDay(e.target.value)} 
    />
    </div>
    <div className="form-control form-control-check">
    <label> Set Reminder</label>
    <input 
    type="checkbox" 
    checked={reminder}
    value={reminder} 
     onChange={(e) => 
     setReminder(e.currentTarget.checked)} 
    />
 
    </div>
    <input 
    className="btn btn-block" 
    type="submit" 
    value=" Save Task" 
    checked={reminder}
    />
    </form>
  )
}

export default AddTask


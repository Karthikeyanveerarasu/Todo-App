import "./styles.css";
import react from 'react';
import {FloatingLabel,Form,Button,Modal} from 'react-bootstrap';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[name,SetName]=useState('');
  const[todo,SetTodo]=useState([]);
  const[tick,Settick]=useState(false);
  const[items,Setitems]=useState(true);
  function completeItems(id){
    let updatedTodo=todo.map((todo)=>{
      if(todo.id=== id){
   todo.completed=!todo.completed;
   if(todo.completed){
     toast.success('Great you complete this task',{
      position:"top-right",
      autoClose:2000,
      draggable:true,
      pauseOnFocusLoss:true,
      theme:"colored"
     })
   }
   else{
     toast.warning('Sorry try to complete soon',{
      position:"top-right",
      autoClose:2000,
      draggable:true,
      pauseOnFocusLoss:true,
      theme:"colored"
     })
   }
      }
      return todo;
    })
    SetTodo(updatedTodo); 
}
  function deleteItems(id){
    
 const newArr=todo.filter(todo=>todo.id !==id);
 SetTodo(newArr);
 if(todo.length==1){
  Setitems(true)
}

 toast.error('task deleted !',{
  position:"top-right",
  autoClose:2000,
  draggable:true,
  pauseOnFocusLoss:true,
  theme:"colored"
 });
  }
  const task=(e)=>{
    if(name==""){
      toast.error('Opps Something you are missed out !',{
        position:"top-right",
        autoClose:2000,
        draggable:true,
        pauseOnFocusLoss:true,
        theme:"colored"
      });
    }
    else{
    e.preventDefault();
    const items={
      id:Math.floor(Math.random()*1000),
      value:name,
      completed:false
    }
    SetTodo((prev)=>[
      ...prev,items
      
    ]);
    SetName('');
    Setitems(false);
    
      toast.success('task added successfully',{
        position:"top-right",
        autoClose:2000,
        draggable:true,
        pauseOnFocusLoss:true,
        theme:"colored"
      })
     setShow(false);
     SetName("");
    
    }
  }

  return (
  <div>
       <ToastContainer />
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Task Name"
        className="mb-5"
      >
        <Form.Control type="name" placeholder="name@example.com" value={name} onChange={ (e)=>SetName(e.target.value)} required/>
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={task}>
            Add Task
          </Button>
        </Modal.Footer>
      </Modal>

    <div class="wrapper"> <div className="text-center my-5">
      <h2 className="text-dark display-5" style={{fontFamily:"Arva",cursor:"pointer",fontSize:"3em"}}>Todo List</h2>
    
      <div className="my-3">
        <p class="lead p-2 text-dark" style={{letterSpacing:"2px"}}>Plan Your Every Activity !</p>

       <button class="btn btn-info my-3" style={{fontSize:"1.1em",letterSpacing:"2px"}} onClick={handleShow}>Add a Task&nbsp;<span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="33" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg></span></button>
      </div>
   
    </div>
    </div>
    <div class="my-5 text-center"> 
     <div className="my-3 p-1 text-dark">
     <h2 className="text-dark display-5" style={{cursor:"pointer",fontSize:"2em",fontFamily:"Arva"}}>Your Tasks</h2>
        </div>
   
     
{
  items&&<ul>
    <li className="text-center my-3 p-2" style={{letterSpacing:"5px",opacity:"0.8"}}>No items Yet !</li>
  </ul>

}  <ul>    
      {
        
        
        todo.map((todo)=>{
          return(
            <li key={todo.id} className="wrapper my-3"> 
      <span className={todo.completed ? "taskline" :  "task"}>{todo.value}</span> 
              <span class="my-3 icon" onClick={()=>completeItems(todo.id)} title="Done"> <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="40" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg></span>

              <span class="icon mx-2" onClick={()=>deleteItems(todo.id)} title="Remove"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></span>
              </li>
          );
        })
        
      }
      </ul>
    </div>
   </div>
  );
}

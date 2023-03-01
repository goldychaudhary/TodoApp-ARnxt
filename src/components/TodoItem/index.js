import {RxCrossCircled} from 'react-icons/rx'
import {BiEdit} from  'react-icons/bi'
import './index.css'


const TodoItem = (props) => {
  
    




   const {deleteTodo, details, onEdit} = props
//    console.log(details)
   const {id, title, color} = details
//    console.log("id",id)

   

   const onDelete = () => {
    deleteTodo(id)
   }

   const editTodo = () => {

    onEdit()
    
   }

   return (
    <li className="list-item-container" style={{background: color}}>
        <p>{title}</p>
        <div className='todo-btn-container'>
            <button onClick={onDelete} className='dlt-btn' type="button"><RxCrossCircled /></button>
            <button onClick={editTodo} className='dlt-btn' type="button"><BiEdit /></button>
        </div>
    </li>
   )
}


export default TodoItem

           
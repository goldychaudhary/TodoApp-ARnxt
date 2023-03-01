import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'


const colorPallete = ["#ffc300", "#a3b18a", "#a2d2ff", "#bde0fe", "#ffc8dd", "#cdb4db"]


class TodoApp extends Component {
state = {todoList: [], userInput: ''}

onUserInput = (e) => {
    this.setState({userInput: e.target.value})
}

addTodo = () => {

        const {userInput, todoList} = this.state
        const inputStringList = userInput.split(" ")
        const repeatValue = inputStringList.slice(inputStringList.length-1)
        if (repeatValue[0] === undefined || !Number(repeatValue)){
            alert("Enter a title ending with a space and number: Learn React 3, 123React 6")
        }
        inputStringList.pop(repeatValue[0])
        const todoTitle = inputStringList.join(" ")

        const randomIndex = Math.floor(Math.random()*5)
        const randomColor = colorPallete[randomIndex]
        const updatedList = [...todoList, ...Array.from({ length: repeatValue[0] }, () => ({id: uuid(), title: todoTitle, count: 0, color: randomColor}))];

        this.setState({todoList: updatedList, userInput:''})
   

        
       
    
}


deleteTodo = (id) => {
    const {todoList} = this.state
     const updatedList = todoList.filter(each => each.id !== id)

     this.setState({todoList: updatedList})

}

onEdit = () => {
    // const {todoList, editTodo, userInput} = this.state

    // const updateTodoItem = todoList.find(each => each.id === id)
    // updateTodoItem.count += 1;
    // updateTodoItem.title = userInput;
    // this.setState({editTodo : updateTodoItem, userInput :''})
    alert("developement in progress, edit functionality is not applied yet!!")
}


 
    render(){
        const {todoList, userInput} = this.state


        return (
            <div className='main-container'>
                <div className='todoMain-container'>
                  <h1 className='main-heading'>What's the Plan for Today?</h1>
                  <div className='input-container'>
                    <input value={userInput} onChange={this.onUserInput} type="text" placeholder='Add a task'/>
                    <button onClick={this.addTodo} className='add-btn' type="button">Add Todo</button>
                  </div>
                  <ul className='todo-list-containet'>

                    {todoList.map(each => (
                         <TodoItem key={each.id} onEdit={this.onEdit} deleteTodo={this.deleteTodo} details={each}/>
                    ))}
                    
                  </ul>
                  
                </div>
                
            </div>
        )
    }
}

export default TodoApp
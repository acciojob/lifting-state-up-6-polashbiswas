import React,{useState} from 'react'
import Child from './Child';
let msg = [
    {key:"Learn React"},
    {key:"Build a React app"},
    {key:"Deploy the React app"}
]
const Parent = () => {
    let [todos, setTodos] = useState([]);


  return (
    <div>
        <h1>Parent Component</h1>
        <Child message={msg} completetodo={setTodos} todo={todos}/>
    </div>
  )
}

export default Parent;
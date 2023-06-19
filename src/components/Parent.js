import React,{useState} from 'react'
import Child from './Child';
let msg = [
    { key: "Learn React", completed: false },
    { key: "Build a React app", completed: false },
    { key: "Deploy the React app", completed: false }
  ];
const Parent = () => {
    let [todos, setTodos] = useState(msg);

    // const handleComplete = (index) => {
    //     const updatedTodos = [...todos];
    //     updatedTodos[index].completed = true;
    //     setTodos(updatedTodos);
    //   };
    const handleComplete = (index) => {
        setTodos(prevTodos => {
          const updatedTodos = [...prevTodos];
          updatedTodos[index].completed = true;
          return updatedTodos;
        });
      };
      

  return (
    <div>
        <h1>Parent Component</h1>
        <Child todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default Parent;
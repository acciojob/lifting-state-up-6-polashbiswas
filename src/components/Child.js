import React from 'react'

const Child = ({message, completetodo, todo}) => {

    function handelChild(index){
        completetodo([...todo, index]);
    }
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
        {
            message.map((value, index) =>{
                return <li key={index}>{value.key}
                { !todo.includes(index) &&
                <button onClick={()=>handelChild(index)}>Complete</button>
            }
                </li>
            })
        }
        </ul>
    </div>
  )
}

export default Child;
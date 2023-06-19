import React from 'react'

const Child = ({ handleComplete, todos }) => {


    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {
                    todos.map((value, index) => {
                        return <li key={index}>{value.key}
                            {!value.completed &&
                                <button onClick={() => handleComplete(index)}>Complete</button>
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Child;
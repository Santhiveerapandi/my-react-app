import React from 'react'

const List = ({todos}) => {
  return (
    <div>
      <ul>
        {todos.map((item) => (
            <li className="item" key={item.id}>
                {item.userId} | 
                {item.id} |
                {item.title}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default List

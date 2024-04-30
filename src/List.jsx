import React from 'react'

const List = ({todos}) => {
  
  const p = (item) => {
    console.log(`popup ${JSON.stringify(item)}`);
    alert(JSON.stringify(item))
  }

  return (
    <div>
      <ul>
        {todos.map((item) => (
            <li className="item" key={item.id} onClick={()=>p(item)}>
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

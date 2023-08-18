import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function TodoList(props) {
  return (
   
// we use index for key text for list-content as props that I passsed  from parent component    
     <li key={props.index}>{props.text}<span><FontAwesomeIcon icon={faTrash} style={{color: "#ff0a0a",}}

// we aslo use delete fuction as a prop from parent-componet and send current index to remove item   
onClick={()=>{props.deleteItem(props.index)}}  /></span></li>
   
  )
}

export default TodoList

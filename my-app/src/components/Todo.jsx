import React from 'react';
import {useState} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


export default function Todo(){

// State that manages and stores all lists in array
const [userValue,setuserValue] = useState([]);



// This Function take user's text and store list array 
function handleClick(text)
{

// this condition prevent when user enters empty value or not 
if(text!=='')

{

// first we copy all the exsisting array items and than include user's current input  
setuserValue([...userValue,text]);
}
}

// this function take current index that you want to deleted after removing specific item 
//we set updated array of items 

function deleteItem(itemIndex){

    // copy array into another variable
      let updatedList  = [...userValue];

      //we use splice method and said it remove only 1 item at this index      
        updatedList.splice(itemIndex,1);
    
        //after removing we copied in our main array
        setuserValue([...updatedList]);
        
}

    return(


<>

<div className='main'>


<div className='inner'>


{/* for Title */}
<div className='title'>
<h1>TO DO LIST</h1>
<h3></h3>
</div>


{/* For Input */}


<TodoInput  handleClick={handleClick}/>

{/* for list */}
<div className='list'>


{/* main array map  each list ----- (li import's from another file...)  */}
{ userValue.map((text,index)=>
(
   <TodoList deleteItem={deleteItem} text={text} index={index}/>
)

)}

</div>


</div>

</div>

</>

)
}
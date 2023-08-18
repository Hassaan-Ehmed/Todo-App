import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
export default function TodoInput(props) {


// State that manage and stores user's current input 
    const [inputText,setinputText] = useState('') 
    

// This function take event as a arguments and matches(user's key === keycode of Enter key)
    function keyPress(e){

      if(e.keyCode === 13){
  
// this function work same as our add button 
        props.handleClick(inputText);

              setinputText('')
           }
  
  }

    return (


      <div className='input'>
  
    <input type="text" name="text" id="text" value={inputText} placeholder='Add New Task...'

         onChange={ 
          

          
// State setter function to set input value            
          (e)=>{setinputText(e.target.value) }
                
                  } 

//after enter text user press any Key so this function will invoke ;                   
                  onKeyDown={keyPress}
        
        />

    <span style={{fontSize:"35px", cursor:"pointer"}} onClick={()=>
        

// this handleClick() function send user's input to process and stores main-array 
//in parent component  
        {props.handleClick(inputText);

//after sended data we will remove the user's input text because we don't need anymore           
            setinputText('');
        
         }
        
        
        }><FontAwesomeIcon icon={faSquarePlus} /></span>
</div>


      
    
  )
}

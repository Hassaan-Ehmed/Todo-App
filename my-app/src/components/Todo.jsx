import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus   } from '@fortawesome/free-solid-svg-icons';


export default function Todo(){

    return(
<>

<div className='main'>


<div className='inner'>


{/* for Title */}
<div className='title'>
<h1>TO DO LIST</h1>
</div>


{/* For Input */}

<div className='input'>
    <input type="text" name="text" id="text" placeholder='Add New Task...'/>
    <span style={{fontSize:"40px",cursor:"pointer"}}><FontAwesomeIcon icon={faSquarePlus} /></span>
</div>


{/* for list */}

<div>
    <ul></ul>
</div>


</div>

</div>

</>

)
}


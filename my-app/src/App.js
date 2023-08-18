import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
   <>
   
<h1 className='main-head'>Hello Todo App</h1>

{/* component render */}
<Todo/>

<footer><i style={{fontFamily:"monospace"}}>made by  Hex {48-61-73-73-75} </i></footer>


   </>
)}

export default App;

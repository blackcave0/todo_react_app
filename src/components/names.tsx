 // Suggested code may be subject to a license. Learn more: ~LicenseLog:1115829845.
 import React, { useState, useEffect } from 'react';
//  import './App.css';
//  import AddTodo from './components/addtodo';
//  import Todo from './components/Todo';
 
 const Names: React.FC = () => {
   const [text, setText] = useState('');
 
   useEffect(() => {
     let i = 0;
     const fullText = 'Welcome to Todo App';
     const intervalId = setInterval(() => {
       if (i < fullText.length) {
         setText(text + fullText[i]);
         i++;
       } else {
         clearInterval(intervalId);
       }
     }, 100);
 
     return () => clearInterval(intervalId);
   }, []);
 
   const handleTitleClick = () => {
     alert('Welcome to our Todo app!');
   };
 
   return (
     <div>
       <h1 onClick={handleTitleClick}>{text}</h1>
       {/* <AddTodo /> */}
       {/* <Todo /> */}
     </div>
   );
 };
 
 export default Names;
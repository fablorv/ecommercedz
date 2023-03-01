import {useState} from 'react'

export default function login(){
  
  const [log, setLog] = useState(false)
  return(

    <>
      {log ?<>
	<input type='text' placeholder='whats your email'/>
	<input type='password' placeholder='whats ur password' /> <button> log in </button>
	</>
	    :
	<>
	  <input type='text' placeholder='username'/>
	  <input type='text' placeholder='name'/>
	  <input type='text' placeholder='family name'/>
	  <input type='text' placeholder='email'/>
	  <input type='password' placeholder='password'/>
	  <input type='password' placeholder='password again'/> <button> sign up </button>
	  </>
      }
      {!log ? 
       <button onClick={()=> setLog(!log)}>log in </button>:
       <button  onClick={()=> setLog(!log)}> sign up </button>}
    </>
  )
}

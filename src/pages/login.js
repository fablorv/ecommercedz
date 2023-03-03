import {useState} from 'react'

export default function login(){
  
  const [log, setLog] = useState(false)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [usernametwo, setusernametwo] = useState('')
  const [name, setname] = useState('')
  const [familyname, setfamilyname] = useState('')
  const [email, setemail] = useState('')
  const [passwordtwo, setpasswordtwo] = useState('')
  const [info , setinfo] = useState([])
  console.log(info)
  return(

    <>
      {log ?<>
	<input type='text' placeholder='whats your email' onChange={e => setusername(e.target.value)} />
	<input type='password' placeholder='whats ur password' onChange={e => setusername(e.target.value)}/> <button onClick={()=> setinfo([...info, {username :username, password: password}])}> log in </button>
	</>
	    :
	<>
	  <input type='text' placeholder='username' onChange={e => setusernametwo(e.target.value)}/>
	  <input type='text' placeholder='name' onChange={e => setname(e.target.value)}/>
	  <input type='text' placeholder='family name' onChange={e => setfamilyname(e.target.value)}/>
	  <input type='text' placeholder='email' onChange={e => setemail(e.target.value)}/>
	  <input type='password' placeholder='password' onChange={e => setpasswordtwo(e.target.value)}/>
	  <input type='password' placeholder='password again'/> <button onClick={()=> setinfo([...info, {username :usernametwo, password: password, name: name, familyname: familyname, email: email}])}> sign up </button>
	  </>
      }
      {!log ? 
       <button onClick={()=> setLog(!log)}>log in </button>:
       <button  onClick={()=> setLog(!log)}> sign up </button>}
    </>
  )
}

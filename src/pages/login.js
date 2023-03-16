import {useState} from 'react'

export default function login(){
  
  const [log, setLog] = useState(false)
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [usernametwo, setusernametwo] = useState('')
  const [name, setname] = useState('')
  const [familyname, setfamilyname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setPhone] = useState('')
  const [info , setinfo] = useState([])
  console.log(info)
  
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/api/database/index', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });
    const json = await response.json();
    console.log(json.message);
  }
  return(

    <>
      {log ?<>
	<input type='text' placeholder='whats your email' onChange={e => setusername(e.target.value)} />
	<input type='password' placeholder='whats ur password' onChange={e => setusername(e.target.value)}/> <button onClick={()=> setinfo([...info, {username :username, password: password}])}> log in </button>
	</>
	    :
	<>
    	    <form onSubmit={handleSubmit}>

		  <input type='text' placeholder='username' onChange={e => setusernametwo(e.target.value)}/>
		  <input type='text' placeholder='name' onChange={e => setname(e.target.value)}/>
		  <input type='text' placeholder='family name' onChange={e => setfamilyname(e.target.value)}/>
		  <input type='text' placeholder='email' onChange={e => setemail(e.target.value)}/>
		  <input type='text' placeholder='phone' onChange={e => setPhone(e.target.value)}/>
		  <input type='password' placeholder='password again'/>  <button onClick={()=> setinfo([...info, {username :usernametwo, password: password, name: name, familyname: familyname, email: email}])}> sign up </button>
	 	<button type="submit">Submit</button>
   	   </form>
	  </>
      }
      {!log ? 
       <button onClick={()=> setLog(!log)}>log in </button>:
       <><button  onClick={()=> setLog(!log)}> sign up </button> </>}
    </>
  )
}

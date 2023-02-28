

export default function login(){
  return(

    <>
      {true ?<>
	<input type='text' placeholder='whats your email'/>
	<input type='password' placeholder='whats ur password' />
	<button>log in </button> </>
	    :
	<>
	  <input type='text' placeholder='username'/>
	  <input type='text' placeholder='name'/>
	  <input type='text' placeholder='family name'/>
	  <input type='text' placeholder='email'/>
	  <input type='password' placeholder='password'/>
	  <input type='password' placeholder='password again'/>
	  <button> sign up </button> </>
      }
    </>
  )
}

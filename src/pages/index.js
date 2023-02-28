import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Home() {
  const [log , setLog]= useState(false)
  return (
    <>
	<header> 
	  <button><Link href='/'>  logo </Link> </button>
	  <button> about us </button>
	  <button><Link href='/products'> PRODUCTS</Link> </button>
	  <button onClick={()=> setLog(!log)}> sign up/login </button>
	  {log ? <>{<Login/>}</> : <></>}
	  <button>cart  </button>
	</header>
	<div>
	  <div>
	    <p> huge cool image of power bank</p>
	  </div>
	  <div>
	      <button><img src='#' alt='powerbank1'/> </button>
	      <button><img src='#' alt='powerbank2'/> </button>
	      <button><img src='#' alt='powerbank3'/> </button>
	      <button><img src='#' alt='powerbank4'/> </button>
	      <button> SHOP HERE </button>
	  </div>
	  <div className="aboutus">
	    <p> we sell power banks of all kinds and stuff </p> 
	  </div>
	</div>
    </>
  )
}


function Login (){


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
};

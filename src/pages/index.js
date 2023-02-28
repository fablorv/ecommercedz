import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Home() {


  return (
    <>
	<header> 
	  <button><Link href='/'>  logo </Link> </button>
	  <button> about us </button>
	  <button><Link href='/products'> PRODUCTS</Link> </button>
	  <button ><Link href='/login'> sign up/login</Link> </button>

	  <button > <Link href='cart'>cart</Link>  </button>

	</header>
	<div>
	  <div>
	    <p> huge cool image of power bank</p>
	  </div>
	  <div>
	      <button><Link href='/items/item1'><img src='#' alt='powerbank1'/></Link> </button>
	      <button><Link href='/items/item2'><img src='#' alt='powerbank2'/></Link> </button>
	      <button><Link href='/items/item3'><img src='#' alt='powerbank3'/></Link> </button>
	      <button><Link href='/items/item4'><img src='#' alt='powerbank4'/></Link> </button>
	      <button> <Link href='/products'>SHOP HERE</Link> </button>
	  </div>
	  <div className="aboutus">
	    <p> we sell power banks of all kinds and stuff </p> 
	  </div>
	</div>
    </>
  )
}






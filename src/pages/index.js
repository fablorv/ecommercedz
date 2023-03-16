import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Home() {
		const [geto , setGeto] = useState(0)
	  const [data, setData] = useState([]);
	useEffect(() => {
	    async function fetchData() {
	      const response = await fetch('/api/mytable');
	      const json = await response.json();
	      setData(json);
	    }

	    fetchData();
	  }, [geto]);
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
	      <button onClick={()=>{if(typeof window !== 'undefined'){localStorage.setItem('from','nether')}}}><Link href='/items/item1'><img src='#' alt='powerbank1'/></Link> </button>
	      <button><Link href='/items/item2'><img src='#' alt='powerbank2'/></Link> </button>
	      <button><Link href='/items/item3'><img src='#' alt='powerbank3'/></Link> </button>
	      <button><Link href='/items/item4'><img src='#' alt='powerbank4'/></Link> </button>
	      <button> <Link href='/products'>SHOP HERE</Link> </button>
	  </div>
	  <div className="aboutus">
	    <p> we sell power banks of all kinds and stuff </p> 
	  </div>
	  <div>
	      {data.map((row) => (
		<div key={row.id}>
		  <p>{row.name}</p>
		  <p>{row.email}</p>
		  <p>{row.phone}</p>
		</div>
	      ))}
	    </div>
	    <button onClick={()=>{setGeto(geto+1)}}>get data </button>
	</div>
    </>
  )
}






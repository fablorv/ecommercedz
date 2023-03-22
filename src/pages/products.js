import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

export default function Products(){
  const [itemone, setItemone] = useState()
  const [itemtwo, setItemtwo] = useState()
  const [itemthree, setItemthree] = useState()
  const [storageO , setstorageO] = useState([])
  const [cookies , setCookies] = useState('')
  let arr2 = useRef([])
  console.log(typeof arr2)
  const setup = ()=>{
    console.log('ifstatement',cookies.cookie)
    if(itemone){
      let state = 'cookie=; Max-age=-1;'
      document.cookie = (state)

    }else {document.cookie = ('cookie=first')}

    console.log('cookie worked')
  }
  const setuptwo = ()=>{

    if(itemtwo){
      let state = 'cookie2=; Max-age=-1;'
      document.cookie = (state)
    }else {document.cookie = ('cookie2=second')}
    console.log('cookie worked2')
  }
  const setupthree = ()=>{
    if(itemthree){
      let state = 'cookie3=; Max-age=-1;'
      document.cookie = (state)
    }else {document.cookie = ('cookie3= thirds')}
    console.log('cookie worked3')
  }
  useEffect(()=>{
      let str = document.cookie;
    
	console.log(str)
	str = str.split('; ');
	const result = {};
	for (let i in str) {
	    const cur = str[i].split('=');
	    result[cur[0]] = cur[1];

	}
        if(result.cookie){
          setItemone(true)
        }else setItemone(false)
        if(result.cookie2){
          setItemtwo(true)
        }else setItemtwo(false)
        if(result.cookie3){
          setItemthree(true)
        }else setItemthree(false);
        
        setCookies(result)
	console.log('this is state', result);
  },[])
    console.log(cookies)
     return(
    <>
        <header>
          <button><Link href='/'><img src='#' alt='logo'/></Link></button>
          <button> about us </button>
          <button> PRODUCTS </button>
          
          <div> <button><Link href='cart'>cart</Link> </button><button> <Link href='/profile/overview'>profile</Link> </button> </div>

        </header>
        <div className="content">
          <div className='search'>
            <input type='text' placeholder='what you looking for' />
            <button> search </button>
          </div>
          <div className="filter-products">
              <div className="filter">
                filter what u want
                <div className="size"> choose sizes </div>
                <div className="color"> choose color </div>
                <div className="condition"> choose condition </div>
              </div>
              <div className="products">
                <button onClick={()=>{window.localStorage.setItem("test", "one"); console.log('two can work'); sessionStorage.setItem("key","value")}}> new butt </button> 
                <div className='product1'><p>name of product 1 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=>{setup(); setItemone(!itemone)}}>{ itemone ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
                <div className='product2'><p>name of product 3 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=>{setuptwo(); setItemtwo(!itemtwo)}}> {itemtwo  ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
                <div className='product3'><p>name of product 2 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=>{setupthree(); setItemthree(!itemthree)}}> { itemthree ? <p>item in cart </p>: <p>add to cart</p>}  </button></div>
              </div>
          </div>
        </div>
    </>
  )
}

import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

export default function Products(){
  const [itemone, setItemone] = useState(false)
  const [itemtwo, setItemtwo] = useState(false)
  const [itemthree, setItemthree] = useState(false)
  let arr2 = useRef([])
    console.log(typeof arr2)
    console.log('at the end', arr2, 'conditions', itemone, itemtwo, itemthree)

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
              
              <div className='product1'><p>name of product 1 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=>{ !arr2.current.includes('1') && arr2.current.push('1');setItemone(!itemone)}}>{itemone ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
              <div className='product2'><p>name of product 3 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> {!arr2.current.includes('2') && arr2.current.push('2');setItemtwo(!itemtwo)}}> {itemtwo ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
              <div className='product3'><p>name of product 2 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> {!arr2.current.includes('3') && arr2.current.push('3');setItemthree(!itemthree)}}> { itemthree ? <p>item in cart </p>: <p>add to cart</p>}  </button></div>
            </div>
        </div>
      </div>
    </>
  )
}

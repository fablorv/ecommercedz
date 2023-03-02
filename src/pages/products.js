import Link from 'next/link'
import {useState} from 'react'

export default function Products(){
  const [itemone, setItemone] = useState(false)
  const [itemtwo, setItemtwo] = useState(false)
  const [itemthree, setItemthree] = useState(false)

  return(
    <>
      <header>
        <button><Link href='/'><img src='#' alt='logo'/></Link></button>
        <button> about us </button>
        <button> PRODUCTS </button>
        
        <div> <button> cart </button><button> <Link href='/profile/overview'>profile</Link> </button> </div>

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
              
              <div className='product1'><p>name of product 1 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> setItemone('true')}>{itemone ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
              <div className='product2'><p>name of product 3 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> setItemtwo('true')}> {itemtwo ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
              <div className='product3'><p>name of product 2 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> setItemthree(true)}> { itemthree ? <p>item in cart </p>: <p>add to cart</p>}  </button></div>
            </div>
        </div>
      </div>
    </>
  )
}

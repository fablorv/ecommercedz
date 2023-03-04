import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

export default function Products(){
  const [itemone, setItemone] = useState(false)
  const [itemtwo, setItemtwo] = useState(false)
  const [itemthree, setItemthree] = useState(false)
  const [storageO , setstorageO] = useState([])
  let arr2 = useRef([])
    console.log(typeof arr2)
    console.log('at the end', Object.values(arr2).length , 'conditions', itemone, itemtwo, itemthree)
  const turnto = (x)=>{
    x(true)
    let stringify = JSON.stringify(arr2)
    localStorage.setItem( 'arr', stringify)
  }

  useEffect(()=>{
      if(localStorage.getItem('arr') || Object.values(arr2).length >1 ){
        console.log(localStorage.getItem('arr'))
        let values = localStorage.getItem('arr')
        let cleanvalues = JSON.parse(values)
        setstorageO(cleanvalues.current)
      }else console.log('empty')
  }, [itemone,itemtwo, itemthree ])
  console.log(storageO, 'test')
 
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
              
              <div className='product1'><p>name of product 1 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=>{ !arr2.current.includes('1') && arr2.current.push('1');turnto(setItemone)}}>{ storageO.includes('1') ? <p>item in cart</p> : <p>add to cart</p>} </button></div>
              <div className='product2'><p>name of product 3 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> {!arr2.current.includes('2') && arr2.current.push('2');turnto(setItemtwo);}}> {storageO.includes('2')? <p>item in cart</p> : <p>add to cart</p>} </button></div>
              <div className='product3'><p>name of product 2 </p> <p> descreption of the product </p> <p> price of the produuct </p> <button onClick={()=> {!arr2.current.includes('3') && arr2.current.push('3');turnto(setItemthree)}}> { storageO.includes('3')? <p>item in cart </p>: <p>add to cart</p>}  </button></div>
            </div>
        </div>
      </div>
    </>
  )
}

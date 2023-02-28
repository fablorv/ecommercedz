import Link from 'next/link'

export default function Products(){
  return(
    <>
      <header>
        <button><Link href='/'><img src='#' alt='logo'/></Link></button>
        <button> about us </button>
        <button> PRODUCTS </button>

      </header>
      <div className="content">
        <div className="filter-products">
            <div className="filter"> filter what u want</div>
            <div className="products">
              
              <div className='product1'> here is product1</div>
              <div className='product2'> here is product2</div>
              <div className='product3'> here is product3</div>
            </div>
        </div>
      </div>
    </>
  )
}

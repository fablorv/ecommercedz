import {useEffect, useState} from 'react'

export default function cart(){
  const [localitems , setlocalitems] = useState()
  const [checkout, setCheckout] = useState(false)
  useEffect(()=>{
    let items = localStorage.getItem('arr')
    if(items){

     let values= JSON.parse(items)
      console.log(items)
      setlocalitems(values)
      console.log(localitems)
    }else console.log('nothing yet ')

  },[])
    const testing = ()=>{
      if(localitems){
        console.log('the value' ,localitems.current, 'the type:' , typeof localitems)
      }
    }
    testing()
  return(
    <>
      
      <p>item 1 u wanna buy</p>
      <button> close </button>
      <p>item 1 u wanna buy</p>
      <p>item 2 u wanna buy</p>
      <p>item 3 u wanna buy</p>
      <p>item 4 u wanna buy</p>
      <button onClick={()=>setCheckout(!checkout)}> check out </button>
      {checkout ? <> <input placeholder="your name"/><input placeholder="your last name"/> <input placeholder="your adress"/><input placeholder="your phone number"/> </>: <></>}

    </>

  )
}

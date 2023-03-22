import {useEffect, useState} from 'react'

export default function cart(){
  const [items, setItems] = useState({})
  const [func , setFunc]= useState()
  useEffect(()=>{
    console.log('page fired')
    let str = document.cookie;

    str = str.split('; ');
    const result = {}
    for(let i in str){
      const cur = str[i].split('=');
      result[cur[0]] = cur[1];
    }
    setItems(result)
     console.log('cookies available', result)
  },[])
  console.log(Object.keys(items).length)
     return(
    <>
       {Object.keys(items).length > 0 ? Object.keys(items).map((Keyname, i) =>(
         <p className="items" key={i}>
            item number {i}: {items[Keyname]}
         </p>
       )) : <>no items yet </>}
       <button> check out </button>
      {false ? <> <input placeholder="your name"/><input placeholder="your last name"/> <input placeholder="your adress"/><input placeholder="your phone number"/> </>: <></>}

    </>

  )
}

import {useEffect, useState} from 'react'

export default function cart(){
  const [items, setItems] = useState({})
  const [func , setFunc]= useState()

  async function handlecheckout(){
    let stuff = {}
    let chooseditems = JSON.stringify(items)
    let user = '{"user":"onething"}'

    stuff.items =chooseditems
    stuff.users = user
    console.log(stuff, "this is stuff ig where i gathered all info")

    const response = await fetch('api/hello',{
      method: 'POST',
      headers:{
        'conent-Type': 'application-json',
      },
      body : JSON.stringify(stuff),
    });
    const json = await response.json
    console.log(json)
  }
    
  useEffect(()=>{
    console.log('page fired')
    let str = document.cookie;
    if(str.length >0){
      str = str.split('; ');
      const result = {}
      for(let i in str){
        const cur = str[i].split('=');
        result[cur[0]] = cur[1];
      }
      setItems(result)
      console.log('cookies available', result)

    }else console.log('less than one')
      },[])
  console.log("length: ", Object.keys(items).length, "the thing: ", items)
     return(
    <>
       {Object.keys(items).length > 0 ? Object.keys(items).map((Keyname, i) =>(
         <p className="items" key={i}>
            item number {i}: {items[Keyname]}
         </p>
       )) : <>no items yet </>}
      {Object.keys(items).length > 0 ? <button onClick={handlecheckout}> check out </button> : <></>}
      {false ? <> <input placeholder="your name"/><input placeholder="your last name"/> <input placeholder="your adress"/><input placeholder="your phone number"/> </>: <></>}

    </>

  )
}

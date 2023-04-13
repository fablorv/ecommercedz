
import { collection, addDoc ,getFirestore} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

import {useEffect, useState} from 'react'


const firebaseConfig = {
  apiKey: "AIzaSyDtvNXCpK2_pZtsvmpmuLWhPylQ8Jewoec",
  authDomain: "testland-4960a.firebaseapp.com",
  projectId: "testland-4960a",
  storageBucket: "testland-4960a.appspot.com",
  messagingSenderId: "390892028351",
  appId: "1:390892028351:web:1bccc6ed25c9809664210a"
};


//figure out where the user input is saved in FORMIK libary 


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function cart(){
  const [items, setItems] = useState({})
  const [func , setFunc]= useState()
  const [checkoutinfo , setCheckout] = useState([])

  async function handlecheckout(){
    let stuff = {}
    let chooseditems = JSON.stringify(items)
    let user = '{"user":"onething"}'
    try {
	  const docRef = await addDoc(collection(db, "users"), {
	    first: "ayoub",
	    last: "somet2",
	    born: 2020,
	    stuff: items
	  });
	  console.log("Document written with ID: ", docRef.id);
	} catch (e) {
	  console.error("Error adding document: ", e);
	}


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
       )) : <>YOur cart is empty go shopping here <p>link</p></>}
      {Object.keys(items).length > 0 ?
	  <>
	    <input placeholder="your name"/><input placeholder="your last name"/> <input placeholder="your adress"/><input placeholder="your phone number"/> <button onClick={handlecheckout}> check out </button>
	  </>  : <></>}


    </>

  )
}

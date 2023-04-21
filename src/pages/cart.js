
import { collection, addDoc ,getFirestore} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useEffect, useState} from 'react'





const firebaseConfig = {
  apiKey: "AIzaSyDtvNXCpK2_pZtsvmpmuLWhPylQ8Jewoec",
  authDomain: "testland-4960a.firebaseapp.com",
  projectId: "testland-4960a",
  storageBucket: "testland-4960a.appspot.com",
  messagingSenderId: "390892028351",
  appId: "1:390892028351:web:1bccc6ed25c9809664210a"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Basic = () => (
  <div>
    <h1>FIll up the form</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        number: '',
      }}
      validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        let cookiestr = document.cookie;
        try {
	  const docRef = await addDoc(collection(db, "users"), {
	    useritems: cookiestr,
	    info: values
	  });
	  console.log("Document written with ID: ", docRef.id);
	} catch (e) {
	  console.error("Error adding document: ", e);
	}
	 let str = document.cookie;
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="number">phone number</label>

        <Field
          id="phone"
          name="phone"
          placeholder="0xxxxxxxx"
          type="number"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
//figure out where the user input is saved in FORMIK libary 




export default function cart(){
  const [items, setItems] = useState({})
  const [func , setFunc]= useState()
  const [checkoutinfo , setCheckout] = useState([])
  const [checkstate, setCheckstate] = useState(false)

  async function handlecheckout(){
    let stuff = {}
    let chooseditems = JSON.stringify(items)
    let user = '{"user":"onething"}'
    try {
	  const docRef = await addDoc(collection(db, "users"), {
	    
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


      {Object.keys(items).length > 0 ?
	  <>{checkstate ? 
		<Basic /> : <>
                              
                   {Object.keys(items).length > 0 ? Object.keys(items).map((Keyname, i) =>(
                     <p className="items" key={i}>
                        item number {i}: {items[Keyname]}
                     </p>
                   )) : <></>}<button onClick={()=> setCheckstate(true)}> checkout </button> 
            </>}
	  </>  : <>YOur cart is empty go shopping here <p>link</p></>}



    </>

  )
}

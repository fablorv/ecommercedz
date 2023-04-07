import Link from 'next/link'
import {useState, useEffect} from 'react'
import {initializeApp} from 'firebase/app'
import {getAuth , GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyDtvNXCpK2_pZtsvmpmuLWhPylQ8Jewoec",
  authDomain: "testland-4960a.firebaseapp.com",
  projectId: "testland-4960a",
  storageBucket: "testland-4960a.appspot.com",
  messagingSenderId: "390892028351",
  appId: "1:390892028351:web:1bccc6ed25c9809664210a"
};





const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function Home() {
	const [geto , setGeto] = useState(0)
	const [data, setData] = useState([]);


	  const [user] = useAuthState(auth);

	
	useEffect(() => {
	    async function fetchData() {
	      const response = await fetch('/api/hello');
	      const json = await response.json();
	      setData(json);
	    }

	    fetchData();
	  }, [geto]);
  return (
    <>
    	<div className="App">
	      <header>
		<h1>⚛️🔥💬</h1>
		<SignOutw />
	      </header>

	      <section>
		{user ? <>you are signed in </> : <SignIn />}
	      </section>

	    </div>
	<header> 
	  <button><Link href='/'>  logo </Link> </button>
	  <button> about us </button>
	  <button><Link href='/products'> PRODUCTS</Link> </button>
	  <button ><Link href='/login'> sign up/login</Link> </button>

	  <button > <Link href='cart'>cart</Link>  </button>

	</header>
	<div>
	  <div>
	    <p> huge cool image of power bank</p>
	  </div>
	  <div>
	      <button onClick={()=>{if(typeof window !== 'undefined'){localStorage.setItem('from','nether')}}}><Link href='/items/item1'><img src='#' alt='powerbank1'/></Link> </button>
	      <button><Link href='/items/item2'><img src='#' alt='powerbank2'/></Link> </button>
	      <button><Link href='/items/item3'><img src='#' alt='powerbank3'/></Link> </button>
	      <button><Link href='/items/item4'><img src='#' alt='powerbank4'/></Link> </button>
	      <button> <Link href='/products'>SHOP HERE</Link> </button>
	  </div>
	  <div className="aboutus">
	    <p> we sell power banks of all kinds and stuff </p> 
	  </div>
	  <div>
	      {data.map((row) => (
		<div key={row.id}>
		  <p>{row.name}</p>
		  <p>{row.email}</p>
		  <p>{row.phone}</p>
		</div>
	      ))}
	    </div>
	    <button onClick={()=>{setGeto(geto+1)}}>get data </button>
	</div>
    </>
  )
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
	  .then((result) => {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    const credential = GoogleAuthProvider.credentialFromResult(result);
	    const token = credential.accessToken;
	    // The signed-in user info.
	    const user = result.user;
	    // IdP data available using getAdditionalUserInfo(result)
	    // ...
	  }).catch((error) => {
	    // Handle Errors here.
	    const errorCode = error.code;
	    const errorMessage = error.message;
	    // The email of the user's account used.
	    const email = error.customData.email;
	    // The AuthCredential type that was used.
	    const credential = GoogleAuthProvider.credentialFromError(error);
	    // ...
	  });

  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOutw() {
	function test1 (){
		signOut(auth).then(() => {
		  // Sign-out successful.
		}).catch((error) => {
		  // An error happened.
		});
		
	}

  return auth.currentUser && (
    <button className="sign-out" onClick={() => test1()}>Sign Out</button>
  )
}





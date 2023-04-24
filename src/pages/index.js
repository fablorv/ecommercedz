import Link from 'next/link'
import {useState, useEffect,Suspense,useRef } from 'react'
import {initializeApp} from 'firebase/app'
import {getAuth , GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { useGLTF,OrbitControls, Stage } from '@react-three/drei'

import { useLoader } from "@react-three/fiber";
import React from 'react'
 const ref = React.createRef()
export function Model(props) {

  const { nodes, materials } = useGLTF("/car.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.81}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0.47, 3.12]}
            rotation={[-2.83, 0, Math.PI]}
            scale={[1, 0.96, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.plate}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["930_stickers"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group position={[-1.16, 0.56, -1.21]} rotation={[0.48, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials["930_tire"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["930_rim"]}
            />
          </group>
          <group position={[-1.02, 0.56, 1.97]} rotation={[0.5, -0.29, 0.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["930_tire"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials["930_rim"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials["930_stickers"]}
          />
          <group
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={0.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <group position={[0, 0.69, -2.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials["930_lights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.coat}
          />
          <group
            position={[0.25, 1.33, 1.33]}
            rotation={[0.62, 0.44, -0.1]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_38.geometry}
            material={materials["930_chromes"]}
          />
          <group
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={0.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <group
            position={[0.7, 0.51, -2.53]}
            rotation={[0.04, -0.21, 0.01]}
            scale={0.24}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0.66, 0.48, 3.11]}
            rotation={[0.16, 0.1, -0.02]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials["930_plastics"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_47.geometry}
            material={materials.glass}
          />
          <group
            position={[-1.01, 1.26, 1.5]}
            rotation={[0.05, 0, 0.05]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_51.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_53.geometry}
            material={materials["930_chromes"]}
          />
          <group position={[0.01, 1.67, 0.65]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0.79, 0.49, -2.38]}
            rotation={[-1.77, -0.01, -0.46]}
            scale={6.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <group
            position={[0, 0.98, -2.49]}
            rotation={[2.32, 0, -Math.PI]}
            scale={0.02}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0, 0.87, 2.92]}
            rotation={[0.46, 0, 0]}
            scale={0.03}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials["930_stickers"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group position={[0.01, 1.67, 0.65]} scale={0.06}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <group
            position={[-0.25, 1.33, 1.32]}
            rotation={[0.58, 0.32, -0.01]}
            scale={0.01}
          >
            <group
              position={[37.47, -1.97, 0.92]}
              rotation={[-2.95, -1.38, -2.99]}
              scale={[14.49, 9.23, 13.31]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_70.geometry}
                material={materials["930_plastics"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0.63, 1.55, -1.29]}
            rotation={[-0.35, 0.04, -0.1]}
            scale={[0.2, 0.13, 0.19]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_72.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0.67, 1.36, 1.11]}
            rotation={[0.07, -1.09, -0.48]}
            scale={[0.2, 0.13, 0.18]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_74.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group
            position={[0.32, 1.39, -1.83]}
            rotation={[-0.51, -0.83, -0.19]}
            scale={0.01}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_76.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <group position={[0, 0.68, -2.62]} scale={[1, 0.96, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_80.geometry}
              material={materials.plate}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials["930_stickers"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_78.geometry}
              material={materials["930_plastics"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials["930_plastics"]}
          />
          <group rotation={[0, -0.05, 0.15]} scale={[0.72, 0.82, 0.82]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_84.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <group
            position={[0, 1.05, 1.38]}
            rotation={[0, -0.05, 0.15]}
            scale={[0.72, 0.82, 0.82]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_86.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <group position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials["930_tire"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_88.geometry}
              material={materials["930_rim"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_91.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_93.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_95.geometry}
            material={materials["930_lights_refraction"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_97.geometry}
            material={materials["930_lights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_99.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_103.geometry}
            material={materials["930_plastics"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_105.geometry}
            material={materials["930_plastics"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_109.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials["930_chromes"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.paint}
          />
          <group
            position={[1.08, 1.21, 0.93]}
            rotation={[0, 0, -0.06]}
            scale={0.93}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_115.geometry}
              material={materials["930_chromes"]}
            />
          </group>
          <group
            position={[1.16, 0.56, -1.21]}
            rotation={[0.48, 0, 0]}
            scale={[0.89, 0.94, 0.94]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_118.geometry}
              material={materials["930_tire"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_117.geometry}
              material={materials["930_rim"]}
            />
          </group>
          <group position={[1.02, 0.56, 1.97]} rotation={[0.52, -0.28, 0.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_120.geometry}
              material={materials["930_rim"]}
            />
          </group>
          <group position={[0, 1.58, 0.67]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_122.geometry}
              material={materials["930_wunderbaum"]}
            />
          </group>
          <group position={[0, 0.69, -2.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_124.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <group position={[-1.8, 0.14, 3.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_126.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_128.geometry}
            material={materials.black}
          />
          <group position={[0, 0.89, 4.01]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_130.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <group position={[0, 0.9, -3.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_132.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <group position={[1.8, 0.14, 3.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_134.geometry}
              material={materials["930_lights"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_136.geometry}
            material={materials["930_stickers"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_138.geometry}
            material={materials["930_stickers"]}
          />
          <group position={[0, 0.14, 0.28]} scale={[1.92, 1.92, 3.84]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_140.geometry}
              material={materials.material_0}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/car.glb')
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
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
              <Suspense fallback={null}>
                <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
                false
                  <Model />
                false
                </Stage>
              </Suspense>
              <OrbitControls ref={ref} autoRotate />
        </Canvas>
      <div className="App">
	      <header>
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
      <p>sign up if no account , or log in if already made one :D !</p>
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





import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
	<header> 
	  <p> logo </p>
	  <p> sign up/login </p>
	  <p>cart should be here as well </p>
	</header>
	<div>
	  <div>
	    <p> huge cool image of power bank</p>
	  </div>
	  <div>
	    <p>gonna show products here when hoevered you can either buy or add to cart (buy will get u to the checkout page) </p>
	  </div>
	</div>
    	<p> does it work ? </p>
    </>
  )
}

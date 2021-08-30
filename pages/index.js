import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Enim deserunt occaecat proident ullamco in. Dolore eiusmod sit eu eu nulla non. Occaecat incididunt irure incididunt qui. Culpa qui amet fugiat sunt tempor voluptate adipisicing duis ea non non sit. Nostrud aliquip velit elit est eu aliquip reprehenderit laboris irure. Excepteur velit irure sint ipsum excepteur reprehenderit nulla id voluptate.</p>
        <p className={styles.text}>Enim deserunt occaecat proident ullamco in. Dolore eiusmod sit eu eu nulla non. Occaecat incididunt irure incididunt qui. Culpa qui amet fugiat sunt tempor voluptate adipisicing duis ea non non sit. Nostrud aliquip velit elit est eu aliquip reprehenderit laboris irure. Excepteur velit irure sint ipsum excepteur reprehenderit nulla id voluptate.</p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}

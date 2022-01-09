import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About| Try Auth!</title>
               
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Home page| welcome here!</h1>
                <h3>This is about...</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit modi voluptatem dignissimos, excepturi possimus cum asperiores error officia soluta beatae assumenda tempore corrupti. Excepturi veritatis odio optio ratione nesciunt facilis.</p>
            
            </main>
        </div>
    )
}

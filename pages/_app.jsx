import '../styles/globals.css';
import Link from 'next/link';
import { SessionProvider } from "next-auth/react"


function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // this component > every page

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />


    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/create">
              <a>Info</a>
            </Link>
          </li>
          <li>
            <Link href="/page/1">
              <a>First page!</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </SessionProvider>
  );
}

export default MyApp;

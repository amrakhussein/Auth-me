import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  // this component > every page

  return (
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
  );
}

export default MyApp;

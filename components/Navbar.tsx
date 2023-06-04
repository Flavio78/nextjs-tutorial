import Link from 'next/link';

import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  // console.log('session, status', session, status);
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">{session ? `Welcome ${session.user?.name}` : 'NO LOGIN'}</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard-auth">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog-auth">Blog</Link>
        </li>
        {!loading && !session && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn('github', { redirect: false });
              }}
            >
              Sign In
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut({ redirect: false });
              }}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';

import { signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard-auth">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog-auth">Blog</Link>
        </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;

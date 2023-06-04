import Link from 'next/link';

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
          <Link href="#">Sign In</Link>
        </li>
        <li>
          <Link href="#">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex sticky top-0 z-50 justify-between items-center p-4 bg-gray-800 text-white">
      <h1>
        <Link href="/">LOGO</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/newblog">NEWBLOG</Link>
          </li>
          <li>
            <Link href="/link3">Link 3</Link>
          </li>
          <li>
            <Link href="/link4">Link 4</Link>
          </li>
          <li>
            <Link href="/link5">Link 5</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <>
      <header className=" h-screen items-center p-4 bg-gray-800 text-white">
        <h1>blog Header Dashboard</h1>
        <nav>
          <ul className=" space-x-4">
            <li>
              <a href="/blog">BLOG</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/link3">Link 3</a>
            </li>
            <li>
              <a href="/link4">Link 4</a>
            </li>
            <li>
              <a href="/link5">Link 5</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

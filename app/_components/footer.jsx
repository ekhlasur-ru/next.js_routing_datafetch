"use client";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="text-white px-8 py-6 bg-gray-800">
        <div className=" mx-auto grid text-center md:text-justify grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <address className="mb-2">
              123 Example Street, Example City, Example Country
            </address>
            <p className="mb-2">
              <a href="tel:+8801518750416" className="hover:text-yellow-400">
                +880 1518750416
              </a>
            </p>
            <p>
              <a
                href="mailto:ekhlasurrahman42@gmail.com"
                className="hover:text-yellow-400"
              >
                ekhlasurrahman42@gmail.com
              </a>
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Learn More</h3>
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/newblog">NEWBLOG</Link>
              </li>
              <li>
                <Link href="/link3">Link 3</Link>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Website</h3>
            <ul>
              <li>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter/X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="mb-4">
              <li>
                <a href="tel:+8801518750416" className="hover:text-yellow-400">
                  +880 1518750416
                </a>
              </li>
              <li>
                <a
                  href="mailto:miekhlas@gmail.com"
                  className="hover:text-yellow-400"
                >
                  Send mail
                </a>
              </li>
            </ul>
            <div className="mt-4 gap-4 text-xl text-center mx-auto  flex justify-center">
              <a
                target="_blank"
                href="https://www.facebook.com/"
                className="mr-2"
              >
                <FaFacebook />
              </a>
              <a href="#" className="mr-2">
                <FaInstagram />
              </a>
              <a href="mailto:ekhlasurrahman42@gmail.com">
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-4">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-600">SorderIT</span> - All rights reserved.
        </p>
      </footer>
    </>
  );
}

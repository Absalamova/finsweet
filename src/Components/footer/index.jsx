
"use client";

import Link from 'next/link';
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00204D] text-white px-3 md:py-10">
      <div className="container mx-auto max-w-[1200px] items-center ">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
          {/* Logo and description */}
          <div>
            <div className='relative w-[120px] h-[70px] '>
              <Link href="/">
                <Image fill src="/LogoFooter.svg" alt="logo" />
              </Link>
            </div>
            <p className="mb-4 font-bold text-[26px]">Bespoke software solutions</p>
            <div className="flex space-x-4 text-xl">
              <Link href="https://facebook.com" target="_blank"><FaFacebook /></Link>
              <Link href="https://youtube.com" target="_blank"><FaYoutube /></Link>
              <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
              <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold pt-4 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold pt-4 mb-3">Connect</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="mailto:hi@finsweet.com">hi@finsweet.com</a></li>
              <li><a href="tel:+1234567890">+(123) 456-7890</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold pt-4 mb-3">Join Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Type email here"
                className="rounded-full  px-4 py-2 bg-white text-black focus:outline-none"
              />
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Bottom links */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© All rights reserved – Finsweet</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

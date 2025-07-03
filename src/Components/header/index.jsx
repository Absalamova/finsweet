'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4">
      <div className="container max-w-[1200px] mx-auto px-2  flex items-center justify-between">
        
        {/* Logo */}
        <div className="relative w-[120px] h-[60px]">
          <Link href="/">
            <Image
              src="/Logo.svg"
              alt="logo"
              fill
              sizes="(max-width: 768px) 80px, 120px"
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-gray-600">
            <li>
              <Link
                className="font-semibold text-[16px] hover:text-blue-900 transition"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-[16px] hover:text-blue-900 transition"
                href="/careers"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-[16px] hover:text-blue-900 transition"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-[16px] hover:text-blue-900 transition"
                href="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-[16px] hover:text-blue-900 transition"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <button
          type="button"
          className="hidden sm:inline-block bg-pink-100 text-orange-500 font-semibold text-[16px] rounded-full px-5 py-2 hover:bg-orange-200 transition"
        >
          Clone Project
        </button>
      </div>
    </header>
  );
}

export default Header;

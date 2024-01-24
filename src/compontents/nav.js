"use client";
import Image from "next/image";
export default function Nav() {
  const navLink = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About " },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center py-4">
      {/* LOGO */}
      <div className="">
        <Image src="/images/logo.png" width={200} height={200} alt="logo" />
      </div>
      {/* NAV LINKS */}

      <div className="flex items-center">
        <ul className="flex items-center gap-16">
          {navLink.map((link) => (
            <li key={link.href} className="text-2xl font-bold bg-gray-500 px-8 py-4">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

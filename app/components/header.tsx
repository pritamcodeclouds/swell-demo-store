"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import swell from '@/lib/swell/client';

export default function Header() {
  // const location = useLocation(); // Get the current location (route)
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    if (localStorage.getItem('isAuthenticated')) {
      setIsAuthenticated(true);
      console.log("header mounted");
    }
  }, [pathname]); // Runs only once when the component mounts

  const handleLogout = async (event) => {
    event.preventDefault();
    await swell.account.logout();
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    router.push('/login');
  }
  return (
    <header className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex items-center justify-between">
   
    <div className="flex items-center">
      <img src="/logo.png" alt="Website Logo" className="h-30 w-auto" />
    </div>

  
    <nav className="space-x-6 text-lg">
    <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          {isAuthenticated ? (
            <Link href="/logout" className="hover:underline" onClick={handleLogout}>Logout</Link>
          ) : (
            <Link href="/login" className="hover:underline">Login</Link>
          )}
    </nav>
  </div>
</header>


  )
}
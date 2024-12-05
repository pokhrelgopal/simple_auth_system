"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchUserProfile, logoutUser } from "@/utils/api";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await fetchUserProfile();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-gray-50 py-4 relative">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-20">
          <div>
            <Logo />
          </div>
          <ul className="hidden md:flex items-center gap-10">
            <Link href="/" passHref>
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/public" passHref>
              <li className="cursor-pointer">Public</li>
            </Link>
            {isLoggedIn && (
              <Link href="/profile" passHref>
                <li className="cursor-pointer">Profile</li>
              </Link>
            )}
          </ul>
        </div>
        <div className="hidden md:flex gap-2">
          {!isLoggedIn ? (
            <>
              <Link href="/login" passHref>
                <Button>Login</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="success">Signup</Button>
              </Link>
            </>
          ) : (
            <Button onClick={handleLogout} variant="danger">
              Logout
            </Button>
          )}
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={toggleMobileMenu} className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-8 space-y-4">
            <li>
              <Link href="/" passHref>
                <span
                  className="block py-2 px-4 text-sm hover:bg-gray-100 rounded"
                  onClick={toggleMobileMenu}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/public" passHref>
                <span
                  className="block py-2 px-4 text-sm hover:bg-gray-100 rounded"
                  onClick={toggleMobileMenu}
                >
                  Public
                </span>
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link href="/profile" passHref>
                  <span
                    className="block py-2 px-4 text-sm hover:bg-gray-100 rounded"
                    onClick={toggleMobileMenu}
                  >
                    Profile
                  </span>
                </Link>
              </li>
            )}
          </ul>
          <div className="mt-8 flex flex-col gap-2">
            {!isLoggedIn ? (
              <>
                <Link href="/login" passHref>
                  <Button className="w-full" onClick={toggleMobileMenu}>
                    Login
                  </Button>
                </Link>
                <Link href="/signup" passHref>
                  <Button
                    variant="success"
                    className="w-full"
                    onClick={toggleMobileMenu}
                  >
                    Signup
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                variant="danger"
                className="w-full"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;

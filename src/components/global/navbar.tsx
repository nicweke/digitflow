import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 py-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px] ">
        <p className="text-3xl font-bold">Digit</p>
        <Image
          src="/wave.svg"
          alt="logo"
          height={20}
          width={20}
          className="shadow-sm text-gray-50"
        />
        <p className="text-3xl font-bold">Flow</p>
      </aside>
      <nav className="absolute left-[50%] right-[50%] transform transform-x-[-50%] transform-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none ">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {
              //wire up user
              true ? "Dashbaord" : "Get Started"
            }
          </span>
        </Link>

        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;

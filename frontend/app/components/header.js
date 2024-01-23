'use client'
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <Image width="60" height="60"  className="text-white p-2 rounded-full" alt="logo"
                           src={`/vercel.svg`} />
                    <span className="ml-3 text-xl">Boiler Plate Project</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-white">link 1</Link>
                    <Link href="/" className="mr-5 hover:text-white">link 2</Link>
                </nav>
                <w3m-button/>
            </div>
        </header>
    );
};

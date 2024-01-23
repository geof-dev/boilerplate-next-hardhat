'use client'

import Image from "next/image";
export const Footer = () => {

    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <Image width="60" height="60"  className="text-white p-2 rounded-full" alt="logo"
                           src={`/vercel.svg`} />
                    <span className="ml-3 text-xl">Boiler Plate</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">©
                    2024 Boiler Plate —
                    <a href="https://independence-dev.com/" className="text-gray-500 ml-1" target="_blank"
                       rel="noopener noreferrer">Independence DEV</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

    </span>
            </div>

        </footer>
    );
};

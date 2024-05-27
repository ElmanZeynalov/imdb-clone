import React from 'react';
import MenuItem from "@/components/MenuItem";
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";

function Header() {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <MenuItem title='home' Icon={AiFillHome} address='/'/>
                <MenuItem title='about' Icon={BsFillInfoCircleFill} address='/about'/>

            </div>
            <Link href='/' className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 px-1 py-2 rounded-lg'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
    );
}

export default Header;

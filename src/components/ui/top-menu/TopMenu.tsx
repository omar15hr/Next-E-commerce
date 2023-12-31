'use client'

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import {IoCartOutline, IoSearchOutline} from 'react-icons/io5'
import Link from "next/link";
import { useEffect, useState } from "react";

export function TopMenu () {

  const openSideMenu = useUIStore( (state) => state.openSideMenu );
  const totalItemsInCart = useCartStore( (state) => state.getTotalItems() );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* logo */}
      <div>
        <Link
          href="/"
        >
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center menu */}
      <div className="hidden sm:block">
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/men">Hombres</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/women">Mujeres</Link>
        <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/kid">Niños</Link>
      </div>

      {/* Search, cart, menu */}
      <div className="flex items-center">

        <Link href="/search" className="mx-2">
          <IoSearchOutline/>
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            {
              ( loaded && totalItemsInCart > 0) && (
                <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                  { totalItemsInCart }
                </span>
              )
            }
            
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg_gray-100"
        >
          Menú
        </button>

      </div>
    </nav>
  )
}
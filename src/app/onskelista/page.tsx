'use client'

import { Line } from "../components/Line";
import { WineGlass } from "../components/WineGlass";
import { useIsAdmin } from "../hooks/useIsAdmin";
import { GiftList } from "./GiftList";
import { GiftProvider } from "./useGifts";

const WISHLIST_ENABLED = false;

export default function WishList() {
  const isAdmin = useIsAdmin();
  const showWishlist = WISHLIST_ENABLED || isAdmin;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center h-full">
        <h1>Önskelista</h1>
        <Line />
        {!showWishlist && (
          <p className="text-5xl mt-4">Önskelistan kommer snart, håll ut!</p>
        )}
        {showWishlist && (
          <GiftProvider>
            <GiftList />
          </GiftProvider>
        )}
      </div>
      <div className="flex justify-end">
        <WineGlass className="w-28" />
      </div>
    </div>
  );
}

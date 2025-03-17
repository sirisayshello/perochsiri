import { Line } from "../components/Line";
import { WineGlass } from "../components/WineGlass";
import { GiftList } from "./GiftList";
import { GiftProvider } from "./useGifts";

const WISHLIST_ENABLED = true;

export default async function WishList() {

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center h-full">
        <h1>Önskelista</h1>
        <Line />
        {!WISHLIST_ENABLED && (
          <p className="text-5xl mt-4">
            Önskelistan kommer snart, håll ut!
          </p>)}
        {WISHLIST_ENABLED && (
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

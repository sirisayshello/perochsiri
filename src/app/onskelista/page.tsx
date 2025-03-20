import { Line } from "../components/Line";
import { WineGlass } from "../components/WineGlass";
import { GiftList } from "./GiftList";
import { GiftProvider } from "./useGifts";

const WISHLIST_ENABLED = false;

export default async function WishList() {
  return (
    <div className="flex flex-col justify-between pt-4">
      <div className="flex flex-col items-center h-full">
        <h1>Önskelista</h1>
        <Line />
        <div className="flex flex-col gap-2 mb-4 mt-4">
          <p className="font-roboto text-sm">
            En lista med grejer vi skulle tycka vore roligt att få, eller bara
            en lista att använda som inspiration.
          </p>
          <p className="font-roboto text-sm">
            Har du köpt eller planerar att köpa något på listan? Klicka på "Den
            tar jag!" så stryks presenten från listan.
          </p>
        </div>
        {!WISHLIST_ENABLED && (
          <p className="text-5xl mt-4">Önskelistan kommer snart, håll ut!</p>
        )}
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

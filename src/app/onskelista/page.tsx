import { WineGlass } from "../components/WineGlass";
import { useGifts } from "./useGifts";

export default async function WishList() {
  const gifts = await useGifts();

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center h-full">
        <h1>Önskelista</h1>
        <img src="/line.svg" alt="divider" className="w-24 mb-4" />
        <ul className="text-4xl flex flex-col mt-6 gap-4">
          {gifts.map((gift) => {
            return <li key={gift.name}>{gift.name}</li>;
          })}
        </ul>
      </div>
      <div className="flex justify-end">
        <WineGlass className="w-28" />
      </div>
    </div>
  );
}

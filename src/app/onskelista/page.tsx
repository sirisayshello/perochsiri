import { useGifts } from "./useGifts";

export default async function WishList() {
  const gifts = await useGifts();

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="font-fave text-[clamp(4rem,2.404rem+5.106vw,7rem)]">
        Önskelista
      </h1>

      <ul className="text-5xl">
        {gifts.map((gift) => {
          return <li>{gift.name}</li>;
        })}
      </ul>
    </div>
  );
}

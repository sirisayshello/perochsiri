"use client";

import { Spinner } from "../components/Spinner";
import { Gift } from "./Gift";
import { useGifts } from "./useGifts";

export const GiftList = () => {
  const { gifts, status } = useGifts();

  if (status === "loading") {
    return <div className="flex justify-center pt-6">
      <Spinner />
    </div>
  }

  return (
    <ul className="text-3xl flex flex-col w-full items-start mt-6 gap-4">
      {gifts.map((gift) => {
        return <Gift key={gift.name} {...gift} />;
      })}
    </ul>
  );
};

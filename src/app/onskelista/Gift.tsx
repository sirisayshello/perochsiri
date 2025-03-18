"use client";

import { useGiftActions } from "./useGiftActions";
import { Gift as GiftType } from "./useGifts";

export const Gift = (gift: GiftType) => {
  const { markAsTaken, isUsersGift, markAsUntaken } = useGiftActions();
  const canMarkAsUntaken = isUsersGift(gift) && gift.taken;
  const canMarkAsTaken = !gift.taken;

  const handleClick = () => {
    if (canMarkAsUntaken) {
      markAsUntaken(gift);
    } else if (!gift.taken) {
      markAsTaken(gift);
    }
  };
  return (
    <li
      key={gift.name}
      className={
        gift.taken
          ? "line-through w-full flex gap-4 justify-between p-2 bg-white"
          : "w-full flex gap-4 justify-between p-2 bg-white"
      }
    >
      <div>
        {gift.name}
        <p className="font-roboto text-sm">{gift.description}</p>
        <a className="font-roboto text-sm" href={gift.link}>
          Länk
        </a>
      </div>

      {(canMarkAsTaken || canMarkAsUntaken) && (
        <button className="font-roboto text-sm" onClick={handleClick}>
          {canMarkAsUntaken ? "Jag har ångrat mig" : "Den vill jag ge!"}
        </button>
      )}
    </li>
  );
};

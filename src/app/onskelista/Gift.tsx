"use client";

import { Button } from "../components/Button";
import { useGiftActions } from "./useGiftActions";
import { Gift as GiftType } from "./useGifts";

export const Gift = (gift: GiftType) => {
  const { markAsTaken, isUsersGift, markAsUntaken, loading } = useGiftActions();
  const canMarkAsUntaken = isUsersGift(gift) && gift.taken;
  const canMarkAsTaken = !gift.taken;

  const handleClick = () => {
    if (canMarkAsUntaken) {
      markAsUntaken(gift);
    } else if (!gift.taken) {
      // Check if user really wants to take the gift
      markAsTaken(gift);
    }
  };
  return (
    <li
      key={gift.name}
      className={"w-full flex gap-4 justify-between p-2 bg-white"}
    >
      <div className={gift.taken ? "line-through" : ""}>
        {gift.name}
        <p className="font-roboto text-sm">{gift.description}</p>
        {gift.link && (
          <a target="_blank" className="font-roboto text-sm" href={gift.link}>
            Länk
          </a>
        )}
      </div>

      <div className="flex justify-center items-center">
        {!gift.canBeMany && (
          <Button
            small
            loading={loading}
            className={
              gift.taken
                ? "flex items-center font-roboto text-sm bg-muted text-background h-10 p-4 rounded-md"
                : "flex items-center font-roboto text-sm bg-accent text-background h-10 p-4 rounded-md"
            }
            onClick={handleClick}
            disabled={!canMarkAsUntaken && !canMarkAsTaken}
          >
            {canMarkAsUntaken ? "Ångrat mig!" : "Den tar jag!"}
          </Button>
        )}
      </div>
    </li>
  );
};

"use client";

import { Gift, useGifts } from "./useGifts";
import { v4 as uuidv4 } from "uuid";

const giftApiUrl = "https://baltzar-wedding.web.val.run";

export const useGiftActions = () => {
  const { updateGifts } = useGifts();

  const handleResponse = async (response: Response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch gifts");
    }
    const giftsData = await response.json();

    updateGifts(giftsData.gifts);
  };

  const getGuestId = () => {
    const guestId = localStorage.getItem("guestId");

    if (!guestId) {
      const guestId = uuidv4();
      localStorage.setItem("guestId", guestId);

      return guestId;
    }

    return guestId;
  };

  const markAsTaken = async (gift: Gift) => {
    const guestId = getGuestId();

    const res = await fetch(giftApiUrl, {
      method: "POST",
      body: JSON.stringify({ ...gift, guestId, taken: true }),
    });

    await handleResponse(res);
  };

  const markAsUntaken = async (gift: Gift) => {
    if (!isUsersGift(gift)) {
      return;
    }

    const guestId = getGuestId();

    const res = await fetch(giftApiUrl, {
      method: "POST",
      body: JSON.stringify({ ...gift, guestId, taken: false }),
    });

    await handleResponse(res);
  };

  const isUsersGift = (gift: Gift) => {
    const guestId = getGuestId();

    return gift.guestId === guestId;
  };

  return { markAsTaken, isUsersGift, markAsUntaken };
};
